import { injectable } from 'tsyringe';
import { DatLichRepository } from '../repositories/datlichRepository';

@injectable()
export class DatLichService{
    constructor(private datLichService :DatLichRepository){}
    async createDatLich(datlich:any):Promise<any>{
        return this.datLichService.createDatLich(datlich);
    }
    async getUserEmail(nguoiDungId: number): Promise<string | null> {
        return this.datLichService.getUserEmail(nguoiDungId);
    }
    async updateTrangThaiLichKham(datlich:any):Promise<any>{
        return this.datLichService.updateTrangThaiLichKham(datlich);
    }
    async getLichKhamByBacSi(bac_si_id:number,pageIndex:number,pageSize:number){
        return this.datLichService.getLichKhamByBacSi(bac_si_id,pageIndex,pageSize);
    }
}