import { injectable } from "tsyringe";
import { ThongkeRepository } from "../repositories/thongkeRepository";

@injectable() 
export class ThongkeService{
    constructor (private thongkeRepository: ThongkeRepository){}
    async GetTop10Doctors():Promise<any>{
        return this.thongkeRepository.GetTop10Doctors();
    }
    async ThongKeLichKhamTheoBacSi(thongke: { start_date: string, end_date: string,bac_si_id:string }):Promise<any>{
        return this.thongkeRepository.ThongKeLichKhamTheoBacSi(thongke)
    }
    // async getThongkespmoinhap():Promise<any>{
    //     return this.thongkeRepository.getThongkespmoinhap();
    // }
    async ThongKeTrangThietBi():Promise<any>{
        return this.thongkeRepository.ThongKeTrangThietBi();
    }
    async ThongKeTongSoBacSi():Promise<any>{
        return this.thongkeRepository.ThongKeTongSoBacSi();
    }
    async ThongKeTongLichHen():Promise<any>{
        return this.thongkeRepository.ThongKeTongLichHen();
    }
    async ThongKeTongKhachHang():Promise<any>{
        return this.thongkeRepository.ThongKeTongKhachHang();
    }
    async ThongKeSoLuongLichHenCuaTatCaBacSi():Promise<any>{
        return this.thongkeRepository.ThongKeSoLuongLichHenCuaTatCaBacSi();
    }
    async ThongKeDoanhThuTheoKhoangThoiGian(thongke: { NgayBatDau: string, NgayKetThuc: string }):Promise<any>{
        return this.thongkeRepository.ThongKeDoanhThuTheoKhoangThoiGian(thongke);
    }
}