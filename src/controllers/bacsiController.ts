import { Request, Response } from 'express';
import { injectable, registry } from "tsyringe";
import { BacSiService } from '../services/bacsiService';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
  cloud_name: 'dskbumohp',
  api_key: '325888745542338',
  api_secret: 'gcFF6WhzUcoWGrLlOmwevCaiy9A' // Click 'View Credentials' below to copy your API secret
});

@injectable()
export class BacSiController{
    constructor(private bacSiService: BacSiService){}
    async getBacSiAll(req:Request,res:Response):Promise<void>{
        try{
            const data = await this.bacSiService.getBacSiAll();
            if(data && data.length > 0){
                res.json(data);
            }else{
                res.json({message:'không lấy được danh sách'});
            }
        }catch(error:any){
            res.json({message:error.message});
        }
    }
    async createBacSi(req:Request,res:Response):Promise<void>{
        try{
            const bacsi = req.body as {ho_ten:string,chuyen_mon:string,khoa_id:string,so_dien_thoai:string,email:string,ngay_sinh:string,gioi_tinh:string,dia_chi:string,hinh_anh:string}
            if(Array.isArray(req.files)){
                const result = await cloudinary.uploader.upload(req.files[0].path)
                bacsi.hinh_anh = result.secure_url;
            }
            const results = await this.bacSiService.createBacSi(bacsi);
            res.json({message:'Đã thêm bác sĩ thành công '})
        }catch(error:any){
            res.json({message: error.message});
        }
    }
    async updateBacSi(req:Request,res:Response):Promise<void>{
        try{
            const bacsi = req.body as {id:string,ho_ten:string,chuyen_mon:string,khoa_id:string,so_dien_thoai:string,email:string,ngay_sinh:string,gioi_tinh:string,dia_chi:string,hinh_anh:string}
            if(Array.isArray(req.files)){
                const result = await cloudinary.uploader.upload(req.files[0].path)
                bacsi.hinh_anh = result.secure_url;
            }
            const results = await this.bacSiService.updateBacSi(bacsi);
            res.json({message:'Đã sửa thành công bác sĩ'})
        }catch(error:any){
            res.json({message:error.message});
        }
    }
    async deleteBacSi(req:Request,res:Response):Promise<void>{
        try{
            let id = req.params.id;
            const results = await this.bacSiService.deleteBacSi(id)
            res.json({message:'Đã xóa bác sĩ thành công',success:true})
        }catch(error:any){
            res.json({message:error.message,success:false});
        }
    }
    async getBacSiById(req:Request,res:Response):Promise<void>{
        try{
            let id = req.params.id;
            const bacsi = await this.bacSiService.getBacSiById(id);
            if(bacsi){
                res.json(bacsi);
            }else{
                res.json({message:'Bản ghi không tồn tại'});
            }
        }catch(error:any){
            res.json({message:error.message});
        }
    }
}