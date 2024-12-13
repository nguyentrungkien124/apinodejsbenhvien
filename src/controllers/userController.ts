import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { UserService } from '../services/userService';
import { generateToken } from '../config/jwt';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: 'dskbumohp',
    api_key: '325888745542338',
    api_secret: 'gcFF6WhzUcoWGrLlOmwevCaiy9A' // Click 'View Credentials' below to copy your API secret
});
@injectable()
export class UserController {
  constructor(private userService: UserService
  ) { }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      let user = req.body as { ho_ten:string,email:string,mat_khau:string,so_dien_thoai:string,ngay_sinh:string,gioi_tinh:string,dia_chi:string,hinh_anh:string,dan_toc:string,CMND:string,nghe_nghiep:string};
      if (Array.isArray(req.files)) {
        const result = await cloudinary.uploader.upload(req.files[0].path)
        user.hinh_anh = result.secure_url;
    }
      const results = await this.userService.createUser(user);
      res.json({ message: 'Đã thêm người dùng thành công.' });
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      let user = req.body as {id:string, ho_ten:string,email:string,mat_khau:string,so_dien_thoai:string,ngay_sinh:string,gioi_tinh:string,dia_chi:string,hinh_anh:string, dan_toc:string, CMND:string, nghe_nghiep:string};
      if (Array.isArray(req.files)) {
        const result = await cloudinary.uploader.upload(req.files[0].path)
        user.hinh_anh = result.secure_url;
    }
      const results = await this.userService.updateUser(user);
      res.json({ message: 'Đã sửa người dùng thành công.' });
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }



  async authenticate(req: Request, res: Response): Promise<void> {
    try {
      const { email, mat_khau } = req.body;
      const user = await this.userService.authenticate(email, mat_khau);
      if (user) {
        const token = generateToken(user);
        user.token = token;
        res.json(user);
      } else {
        res.status(401).json({ message: "Sai mật tài khoản hoặc mật khẩu" });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async getThongTinNguoiDungByID(req:Request,res:Response):Promise<void>{
    try{
      let id = req.params.id;
      const user = await this.userService.getThongTinNguoiDungByID(id);
      if(user){
        res.json(user);
      }else{
        res.json({message:'Bản ghi không tồn tại'});
      }
    }catch(error:any){
      res.json({message:error.message});
    }
  }

  async GetAllNguoiDung(req:Request,res:Response):Promise<any>{
    try{
        const data = await this.userService.GetAllNguoiDung();
        if(data && data.length >0){
            res.json(data);
        }else{
            res.json({message:'không lấy được danh sách'});
        }
    }catch(error:any){
        res.json({message:error.message});
    }
}

}