import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { DatLichService } from '../services/datlichService';
import { sendEmail } from '../config/mailer';

@injectable()
export class DatLichController {
    constructor(private datLichService: DatLichService) { }

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
                ngay_tao: string
            };

            // Gọi dịch vụ để tạo lịch
            await this.datLichService.createDatLich(datlich);

            // Lấy email của người dùng
            // Lấy email của người dùng
            const emailTo = await this.datLichService.getUserEmail(datlich.nguoi_dung_id);
            console.log(`Email lấy được: ${emailTo}`);
            if (!emailTo) {
                res.status(400).json({ message: 'Không tìm thấy email của người dùng.' });
                return;
            }

            // Gửi email xác nhận
            // Gửi email xác nhận
            const subject = 'Xác nhận đặt lịch';
            const text = `Bạn đã đặt lịch thành công với thông tin sau:
                    - Ngày hẹn: ${datlich.ngay_hen}
                    - Giờ hẹn: ${datlich.ca_dat}
                    - Bác sĩ ID: ${datlich.bac_si_id}
                    - Ghi chú: ${datlich.ghi_chu}`;

            console.log(`Gửi email tới: ${emailTo}`);
            console.log(`Subject: ${subject}`);
            console.log(`Nội dung: ${text}`);

            await sendEmail(emailTo, subject, text);


            res.json({ message: 'Đã thêm đặt lịch thành công và gửi email xác nhận.' });
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }

    async testEmail(req: Request, res: Response): Promise<void> {
        try {
            await sendEmail('kiennro38@gmail.com', 'Test Subject', 'This is a test email.');
            res.json({ message: 'Email sent successfully!' });
        } catch (error: any) {
            res.status(500).json({ message: 'Error sending email: ' + error.message });
        }
    }
    async updateTrangThaiLichKham(req:Request, res:Response):Promise<void>{
        try{
            let datlich = req.body as{id:string,trang_thai:string};
            const results = await this.datLichService.updateTrangThaiLichKham(datlich);
            res.json({message:'Đã sửa thành công trạng thái lịch khám'});
            // let nhomthietbi =req.body as {id:string,ten_nhom:string,trang_thai:string};
            // const results = await this.nhomThietBiService.updateNhomThietBi(nhomthietbi);
            // res.json({message:'Đã sửa thành công nhóm thiết bị',results:true})
        }catch(error:any){
            res.json({message:error.message});
        }
    }

    async getLichKhamByBacSi(req:Request,res:Response):Promise<void>{
        try{
            const bac_si_id = parseInt(req.params.bac_si_id);
            const pageIndex = parseInt(req.params.pageIndex, 10);
            const pageSize = parseInt(req.params.pageSize, 10);
            
            if (isNaN(bac_si_id) || isNaN(pageIndex) || isNaN(pageSize)){
                res.status(400).json({message:'Thông tin đầu vào không hợp lệ'});
                return;
            }
            const datlich = await this.datLichService.getLichKhamByBacSi(bac_si_id,pageIndex,pageSize)
    
            if(datlich){
                res.json(datlich);
            }else{
                res.json({message:'Bản ghi không tồn tại'});
            }
           }catch(error:any){
            res.json({messaage:error.messaage});
           }
    }
}
