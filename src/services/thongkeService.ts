import { injectable } from "tsyringe";
import { ThongkeRepository } from "../repositories/thongkeRepository";

@injectable() 
export class ThongkeService{
    constructor (private thongkeRepository: ThongkeRepository){}
    // async getThongkespbanchay():Promise<any>{
    //     return this.thongkeRepository.getThongkespbanchay();
    // }
    async ThongKeLichKhamTheoBacSi(thongke: { start_date: string, end_date: string,bac_si_id:string }):Promise<any>{
        return this.thongkeRepository.ThongKeLichKhamTheoBacSi(thongke)
    }
    // async getThongkespmoinhap():Promise<any>{
    //     return this.thongkeRepository.getThongkespmoinhap();
    // }
}