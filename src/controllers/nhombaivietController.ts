import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { NhomBaiVietService } from '../services/nhombaivietService';

@injectable()
export class NhomBaiVietController{
    constructor(private nhomBaiVietService: NhomBaiVietService){}
    
    async getNhomBaiVietAll(req: Request,res:Response):Promise<any>{
        try{
            const data = await this.nhomBaiVietService.getNhomBaiVietAll();
            if(data && data.length >0){
                res.json(data);
            }else{
                res.json({message:'không có danh sách trong dữ liệu'});
            }
        }catch (error:any){
            res.json({message:error.message});
        }
    }
    async createNhomBaiViet(req:Request,res:Response):Promise<void>{
        try{
            let nhombaiviet = req.body as {id_admin:string,tieu_de:string,mo_ta:string,trang_thai:boolean};
            const results = await this.nhomBaiVietService.createNhomBaiViet(nhombaiviet);
            res.json({message:'Đã thêm thành công nhóm bài viết',results:true})

        }catch(error:any){
            res.json({message:error.message});
        }
    }

    async updateNhomBaiViet(req:Request, res:Response):Promise<void>{
        try{
            let nhombaiviet = req.body as {id:string,id_admin:string,tieu_de:string,mo_ta:string,trang_thai:boolean};
            const results = await this.nhomBaiVietService.updateNhomBaiViet(nhombaiviet);
            res.json({message:'Đã sửa thành công nhóm bài viết',results:true})
        }
        catch(error:any){
            res.json({message:error.message});
        }
    }
    async deleteNhomBaiViet(req:Request,res:Response):Promise<void>{
        try{
            let id = req.params.id;
            const results = await this.nhomBaiVietService.deleteNhomBaiViet(id);
            res.json({message:'Đã xóa nhóm bài viết thành công',success:true});

        }catch(error:any){
            res.json({message:error.message,success:false});
        }
    }
    async getNhomBaiVietByID(req:Request,res:Response):Promise<void>{
        try{
            let id = req.params.id;
            const nhombaiviet = await this.nhomBaiVietService.getNhomBaiVietByID(id);
            if(nhombaiviet){
                res.json(nhombaiviet);
            }else{
                res.json({message:'Bản ghi không tồn tại'});
            }
        }catch(error:any){
            res.json({message:error.message});
        }
    }
}