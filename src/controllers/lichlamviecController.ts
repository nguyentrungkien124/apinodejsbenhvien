import { Request, Response } from 'express';
import { injectable } from "tsyringe";

import { LichLamViecRepository } from '../repositories/lichlamviecRepository';
import { LichLamViecService } from '../services/lichlamviecService';

@injectable()
export class LichLamViecController{
    constructor(private lichLamViecService: LichLamViecService){}

    async getLichLamViecByBacSiID(req:Request,res:Response):Promise<void>{
        try{
            let id = req.params.id;
            const lichlamviec = await this.lichLamViecService.getLichLamViecByBacSiID(id);
            if(lichlamviec){
                res.json(lichlamviec);
            }else{
                res.json({message:'Bản ghi không tồn tại'});
            }
        }catch(error:any){
            res.json({message:error.message});
        }
    }

    async createLichLamViecBacSi(req:Request,res:Response):Promise<void>{
        try{
            let lichlamviec = req.body as {bac_si_id:string,ngay_lam_viec:string,gio_bat_dau:string,gio_ket_thuc:string,trang_thai:string,ghi_chu:string};
            const results = await this.lichLamViecService.createLichLamViecBacSi(lichlamviec);
            res.json({message:'Đã thêm thành công lịch làm việc'});

        }catch(error:any){
            res.json({message:error.message});
        }
    }
    async getLichLamViecByBacSiAndDate(req:Request,res:Response):Promise<void>{
        try {

            // Chuyển đổi các giá trị từ string sang number
            const bac_si_id = parseInt(req.params.bac_si_id, 10);
            const ngay_lam_viec = req.params.ngay_lam_viec;
            const pageIndex = parseInt(req.params.pageIndex, 10);
            const pageSize = parseInt(req.params.pageSize, 10);
            // Kiểm tra xem các giá trị đã chuyển đổi có hợp lệ hay không
          // Kiểm tra xem các giá trị đã chuyển đổi có hợp lệ hay không
        if (isNaN(bac_si_id) || isNaN(pageIndex) || isNaN(pageSize)) {
            res.status(400).json({ message: 'Thông tin đầu vào không hợp lệ.' });
            return;
        }

        // Kiểm tra định dạng ngày
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Kiểm tra định dạng 'YYYY-MM-DD'
        if (!dateRegex.test(ngay_lam_viec)) {
            res.status(400).json({ message: 'Ngày làm việc không hợp lệ, cần đúng định dạng YYYY-MM-DD.' });
            return;
        }


            // Gọi service với các giá trị đã được chuyển đổi
            const lichlamviec = await this.lichLamViecService.getLichLamViecByBacSiAndDate(bac_si_id, ngay_lam_viec, pageIndex, pageSize);

            // Kiểm tra và trả về kết quả
          // Kiểm tra và trả về kết quả
        if (lichlamviec) {
            res.json(lichlamviec);
        } else {
            res.json({ message: 'Bản ghi không tồn tại' });
        }
    } catch (error: any) {
        res.json({ message: error.message });
    }
}
}