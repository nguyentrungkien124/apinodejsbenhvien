import { injectable } from 'tsyringe';
import { BacSiRepository } from '../repositories/bacsiRepository';

@injectable()
export class BacSiService{
    constructor(private bacSiService: BacSiRepository){

    }
    async getBacSiAll():Promise<any>{
        return this.bacSiService.getBacSiAll();
    }
    async createBacSi(bacsi:any):Promise<any>{
        return this.bacSiService.createBacSi(bacsi);
    }
    async updateBacSi(bacsi:any):Promise<any>{
        return this.bacSiService.updateBacSi(bacsi);
    }
    async deleteBacSi(id:any):Promise<any>{
        return this.bacSiService.deleteBacSi(id);
    }
    async getBacSiById(id:any):Promise<any>{
        return this.bacSiService.getBacSiByID(id);
    }
}