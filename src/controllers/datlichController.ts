import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { DatLichService } from '../services/datlichService';
import { sendEmail } from '../config/mailer';
import { io } from '../app';
@injectable()
export class DatLichController {
    constructor(private datLichService: DatLichService) { }

    // Trong DatLichController
    async createDatLich(req: Request, res: Response): Promise<void> {
        try {
            const datlich = req.body as {
                nguoi_dung_id: number,
                bac_si_id: string,
                goi_kham_id: string,
                ngay_hen: string,
                ca_dat: string,
                trang_thai: string,
                ghi_chu: string,
                ngay_tao: string,
                chuyen_khoa: string,
                gia: string,
                ly_do: string
            };

            // Gọi dịch vụ để tạo lịch
            await this.datLichService.createDatLich(datlich);

            // Lấy email của người dùng
            const emailTo = await this.datLichService.getUserEmail(datlich.nguoi_dung_id);
            if (!emailTo) {
                res.status(400).json({ message: 'Không tìm thấy email của người dùng.' });
                return;
            }
            console.log('bac_si_id nhận được:', datlich.bac_si_id);

            // Lấy tên bác   sĩ
            const tenBacSi = await this.datLichService.getDoctorName(datlich.bac_si_id);
            if (!tenBacSi) {
                res.status(400).json({ message: 'Không tìm thấy thông tin bác sĩ.' });
                return;
            }

            // Gửi email xác nhận
            const subject = 'Xác nhận đặt lịch';
            const text = `
            Bạn đã đặt lịch khám thành công với thông tin sau:
            - Ngày hẹn: ${datlich.ngay_hen}
            - Giờ hẹn: ${datlich.ca_dat}
            - Bác sĩ: ${tenBacSi}
            - Chuyên khoa: ${datlich.chuyen_khoa}
            - Giá tiền: ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(datlich.gia))}
            - Ghi chú: ${datlich.ghi_chu}
            Vui lòng đến đúng giờ để đảm bảo thời gian khám!
            `;

            const html = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #4CAF50; text-align: center;">Xác nhận đặt lịch thành công</h2>
                    <p>Chào bạn,</p>
                    <p>Bạn đã đặt lịch khám thành công với thông tin sau:</p>
                    <ul style="list-style-type: none; padding: 0;">
                        <li><strong>Ngày hẹn:</strong> ${datlich.ngay_hen}</li>
                        <li><strong>Giờ hẹn:</strong> ${datlich.ca_dat}</li>
                        <li><strong>Bác sĩ:</strong> ${tenBacSi}</li>
                        <li><strong>Ghi chú:</strong> ${datlich.ghi_chu}</li>
                        <li><strong>Chuyên khoa:</strong> ${datlich.chuyen_khoa}</li>
                        <li><strong>Giá tiền:</strong> ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(datlich.gia))}</li>
                    </ul>
                    <p style="color: red; font-weight: bold;">Vui lòng đến đúng giờ để đảm bảo thời gian khám!</p>
                    <p style="text-align: center; color: #555;">Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.</p>
                </div>
            `;

            await sendEmail(emailTo, subject, text, html);


            // Phát sự kiện thời gian thực qua Socket.IO
            io.emit('appointment_booked', {
                nguoi_dung_id: datlich.nguoi_dung_id,
                bac_si_id: datlich.bac_si_id,
                ngay_hen: datlich.ngay_hen,
                ca_dat: datlich.ca_dat,
                trang_thai: datlich.trang_thai
            });


            res.json({ message: 'Đã thêm đặt lịch thành công và gửi email xác nhận.' });
        } catch (error: any) {
            console.error('Error in createDatLich:', error);
            res.status(500).json({ message: error.message });
        }
    }

    // async testEmail(req: Request, res: Response): Promise<void> {
    //     try {
    //         await sendEmail('kiennro38@gmail.com', 'Test Subject', 'This is a test email.');
    //         res.json({ message: 'Email sent successfully!' });
    //     } catch (error: any) {
    //         res.status(500).json({ message: 'Error sending email: ' + error.message });
    //     }
    // }
    async updateTrangThaiLichKham(req: Request, res: Response): Promise<void> {
        try {
            let datlich = req.body as { id: string };
            const results = await this.datLichService.updateTrangThaiLichKham(datlich);
            res.json({ message: 'Đã sửa thành công trạng thái lịch khám' });
            // let nhomthietbi =req.body as {id:string,ten_nhom:string,trang_thai:string};
            // const results = await this.nhomThietBiService.updateNhomThietBi(nhomthietbi);
            // res.json({message:'Đã sửa thành công nhóm thiết bị',results:true})
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }

    async HuyPhieuKham(req: Request, res: Response): Promise<void> {
        try {
            const datlich = req.body as { id: string, ghi_chu: string };
            const results = await this.datLichService.HuyPhieuKham(datlich);

            if (!datlich.id || !datlich.ghi_chu) {
                res.status(400).json({ message: 'Thiếu id hoặc ghi chú' });
                return;
            }

            res.json({ message: 'Đã sửa thành công trạng thái lịch khám' });
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    
    async TuChoiKham(req: Request, res: Response): Promise<void> {
        try {
            const datlich = req.body as { id: string, ly_do: string };
            const results = await this.datLichService.TuChoiKham(datlich);

            if (!datlich.id || !datlich.ly_do) {
                res.status(400).json({ message: 'Thiếu id hoặc ghi chú' });
                return;
            }

            res.json({ message: 'Đã sửa thành công trạng thái lịch khám' });
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }


    async getLichKhamByBacSi(req: Request, res: Response): Promise<void> {
        try {
            const bac_si_id = parseInt(req.params.bac_si_id);
            const pageIndex = parseInt(req.params.pageIndex, 10);
            const pageSize = parseInt(req.params.pageSize, 10);

            if (isNaN(bac_si_id) || isNaN(pageIndex) || isNaN(pageSize)) {
                res.status(400).json({ message: 'Thông tin đầu vào không hợp lệ' });
                return;
            }
            const datlich = await this.datLichService.getLichKhamByBacSi(bac_si_id, pageIndex, pageSize)

            if (datlich) {
                res.json(datlich);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ messaage: error.messaage });
        }
    }

    async GetLichKhamByNguoiDung(req: Request, res: Response): Promise<void> {
        try {
            const nguoi_dung_id = parseInt(req.params.nguoi_dung_id);
            const pageIndex = parseInt(req.params.pageIndex, 10);
            const pageSize = parseInt(req.params.pageSize, 10);

            if (isNaN(nguoi_dung_id) || isNaN(pageIndex) || isNaN(pageSize)) {
                res.status(400).json({ message: 'Thông tin đầu vào không hợp lệ' });
                return;
            }
            const datlich = await this.datLichService.GetLichKhamByNguoiDung(nguoi_dung_id, pageIndex, pageSize)

            if (datlich) {
                res.json(datlich);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ messaage: error.messaage });
        }
    }
}
