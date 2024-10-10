import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class BacSiRepository{
    constructor(private db: Database){}
    async getBacSiAll():Promise<any>{
        try{
            const sql = 'CALL GetBacSiAll()';
            const [results] = await this.db.query(sql,[]);
            return results;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async createBacSi(bacsi:any):Promise<any>{
        try{
            const sql = 'CALL CreateBacSi(?,?,?,?,?,?,?,?,?)';
            await this.db.query(sql,[bacsi.ho_ten,bacsi.chuyen_mon,bacsi.khoa_id,bacsi.so_dien_thoai,bacsi.email,bacsi.ngay_sinh,bacsi.gioi_tinh,bacsi.dia_chi,bacsi.hinh_anh]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }
    async updateBacSi(bacsi:any):Promise<any>{
        try{
            const sql = 'CALL UpdateBacSi(?,?,?,?,?,?,?,?,?,?)';
            await this.db.query(sql,[bacsi.id,bacsi.ho_ten,bacsi.chuyen_mon,bacsi.khoa_id,bacsi.so_dien_thoai,bacsi.email,bacsi.ngay_sinh,bacsi.gioi_tinh,bacsi.dia_chi,bacsi.hinh_anh]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }
    async deleteBacSi(id:any):Promise<any>{
        try{
            const sql = 'CALL DeleteBacSi(?)'
            await this.db.query(sql,[id])
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }
    async getBacSiByID(id:any):Promise<any>{
        try{
            const sql = 'CALL GetBacSiByID(?)'
            const [results] = await this.db.query(sql,[id])
            return results;
        }catch(error:any){
            throw new Error(error.message)
        }
    }
}