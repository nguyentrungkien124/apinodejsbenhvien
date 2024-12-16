import { injectable } from "tsyringe";
import { ThongkeService } from "../services/thongkeService";
import { Request, Response } from 'express';
@injectable() 
export class ThongkeController{
    constructor(private thongkeService:ThongkeService){}
    async GetTop10Doctors(req:Request,res:Response):Promise<void>{
        try{
            const data = await this.thongkeService.GetTop10Doctors();
            if(data && data.length>0){
                res.json(data);
            }else{
                res.json({message:'không tìm thấy dữ liệu'});
            }
        }catch(error:any){
            res.json({message:error.message});
        }
    }

//     async getThongkespmoinhap(req:Request,res:Response):Promise<void>{
//         try{
//             const data = await this.thongkeService.getThongkespmoinhap();
//             if(data && data.length>0){
//                 res.json(data);
//             }else{
//                 res.json({message:'không tìm thấy dữ liệu'});
//             }
//         }catch(error:any){
//             res.json({message:error.message});
//         }
//     }
    async ThongKeLichKhamTheoBacSi(req: Request, res: Response): Promise<void> {
        try {
            const { start_date, end_date,bac_si_id } = req.body as { start_date: string, end_date: string ,bac_si_id:string};

            // Validate that both dates are provided
            if (!start_date || !end_date || !bac_si_id) {
                res.status(400).json({ message: "Vui lòng cung cấp cả Ngày Bắt Đầu và Ngày Kết Thúc." });
                return;
            }

            // Pass the dates as a single object
            const data = await this.thongkeService.ThongKeLichKhamTheoBacSi({ start_date, end_date,bac_si_id });

            if (data && data.length > 0) {
                res.json(data);
            } else {
                res.json({ message: 'không tìm thấy dữ liệu' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}