import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class UserRepository {
  constructor(private db: Database) { }
  async createUser(user: any): Promise<any> {
    try {
      const sql = 'CALL CreateNguoiDung(?, ?, ?, ?, ?, ?, ?, ?,?,?,?)';
      await this.db.query(sql, [user.ho_ten, user.email, user.mat_khau, user.so_dien_thoai, user.ngay_sinh, user.gioi_tinh, user.dia_chi, user.hinh_anh, user.dan_toc, user.CMND, user.nghe_nghiep]);
      return true;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async updateUser(user: any): Promise<any> {
    try {
      const sql = 'CALL UpdateNguoiDung(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      await this.db.query(sql, [user.id,user.ho_ten, user.email, user.mat_khau, user.so_dien_thoai, user.ngay_sinh, user.gioi_tinh, user.dia_chi, user.hinh_anh, user.dan_toc, user.CMND, user.nghe_nghiep]);
      return true;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async GetUserByAccount(email: string, mat_khau: string): Promise<any> {
    try {
      const sql = 'CALL GetUserByAccount(?,?)';
      const [results] = await this.db.query(sql, [email, mat_khau]);
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getThongTinNguoiDungByID(id: any): Promise<any> {
    try {
      const sql = 'CALL GetThongTinNguoiDungByID(?)'
      const [results] = await this.db.query(sql, [id]);
      return results;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async GetAllNguoiDung():Promise<any>{
    try{
        const sql = 'CALL GetAllNguoiDung()'
        const [results] = await this.db.query(sql,[])
        return results;
    }catch(error:any){
        throw new Error(error.message);
    }
}
}