import { injectable } from "tsyringe";
import { Database } from "../config/database";

@injectable()
 export class ThongkeRepository{
    constructor (private db:Database){}
    async GetTop10Doctors():Promise<any>{
        try{
            const sql = 'CALL GetTop10Doctors()';
            const [results] =await this.db.query(sql,[]);
            return results;
        }catch(error:any){
            throw new Error(error.messge);
        }
    }

    // async getThongkespmoinhap():Promise<any>{
    //     try{
    //         const sql = 'CALL ThongKeSanPhamMoiNhap()';
    //         const [results] = await this.db.query(sql,[]);
    //         return results;
    //     }catch(error:any){
    //         throw new Error(error.message);
    //     }
    // }

    async ThongKeLichKhamTheoBacSi(thongke: { start_date: string, end_date: string,bac_si_id:string }):Promise<any>{
        try{
            
            const sql = 'CALL ThongKeLichKhamTheoBacSi(?,?,?)';
            const [results] = await this.db.query(sql,[thongke.start_date,thongke.end_date,thongke.bac_si_id]);
            return results;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    
 }