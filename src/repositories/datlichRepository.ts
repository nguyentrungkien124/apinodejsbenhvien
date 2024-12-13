import { injectable } from 'tsyringe';
import { Database } from '../config/database';
import trangThietBiRouter from '../routes/thietbiRouter';

@injectable()
export class DatLichRepository {
    constructor(private db: Database) {}

    async createDatLich(datlich: any): Promise<any> {
        try {
            const sql = 'CALL CreateDatLich(?,?,?,?,?,?,?,?,?,?,?)';
            await this.db.query(sql, [
                datlich.nguoi_dung_id,
                datlich.bac_si_id,
                datlich.goi_kham_id,
                datlich.ngay_hen,
                datlich.ca_dat,
                datlich.trang_thai,
                datlich.ghi_chu,
                datlich.ngay_tao,
                datlich.chuyen_khoa,
                datlich.gia,
                datlich.ly_do
            ]);
            return true;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    

    async updateTrangThaiLichKham(datlich:any):Promise<any>{
        try{
            const sql = 'CALL UpdateTrangThaiLichKham(?)'
            await this.db.query(sql,[
                datlich.id
            ]);
            return true;
        }catch(error:any){
            throw new Error(error.message)
        }
    }   

    async HuyPhieuKham(datlich:any):Promise<any>{
        try{
            const sql = 'CALL HuyPhieuKham(?,?)'
            await this.db.query(sql,[datlich.id,datlich.ghi_chu]);
            return true;
        }catch(error:any){
            throw new Error(error.messaage)
        }
    }
    async TuChoiKham(datlich:any):Promise<any>{
        try{
            const sql = 'CALL TuChoiKham(?,?)'
            await this.db.query(sql,[datlich.id,datlich.ly_do]);
            return true;
        }catch(error:any){
            throw new Error(error.messaage)
        }
    }
    async getLichKhamByBacSi(bac_si_id:number, pageIndex:number,pageSize:number){
       try{
        const sql = 'CALL GetLichKhamByBacSi(?,?,?)'
        const [results] = await this.db.query(sql,[bac_si_id,pageIndex,pageSize]);
        return results;
       }catch(error:any){
            throw new Error(error.message);
       }
    }

    async GetLichKhamByNguoiDung(nguoi_dung_id:number, pageIndex:number,pageSize:number){
        try{
         const sql = 'CALL GetLichKhamByNguoiDung(?,?,?)'
         const [results] = await this.db.query(sql,[nguoi_dung_id,pageIndex,pageSize]);
         return results;
        }catch(error:any){
             throw new Error(error.message);
        }
     }
    async getUserEmail(nguoiDungId: number): Promise<string | null> {
        try {
            const sql = 'SELECT email FROM nguoi_dung WHERE id = ?';
            const result = await this.db.query(sql, [nguoiDungId]);
            return result[0]?.email || null; // Trả về email nếu có
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    async getDoctorName(bacSiId: string): Promise<string | null> {
        try {
            const sql = 'SELECT ho_ten FROM bac_si WHERE id = ?';
            const result = await this.db.query(sql, [bacSiId]);
            return result[0]?.ho_ten || null; // Trả về tên nếu tồn tại
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    
}
