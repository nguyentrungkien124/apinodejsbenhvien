import { injectable } from 'tsyringe';
import { UserRepository } from '../repositories/userRepository';

@injectable()
export class UserService {
  constructor(private userRepository: UserRepository
  ) {}
  
  async createUser(user: any): Promise<any> {
    return this.userRepository.createUser(user);
  }
  async updateUser(user: any): Promise<any> {
    return this.userRepository.updateUser(user);
  }
  async getThongTinNguoiDungByID(id:any):Promise<any>{
    return this.userRepository.getThongTinNguoiDungByID(id);
  }
  async GetAllNguoiDung():Promise<any>{
    return this.userRepository.GetAllNguoiDung();
}

  async authenticate(email: string, mat_khau: string): Promise<any> {     
    let user = await this.userRepository.GetUserByAccount(email, mat_khau);
    if (user) { 
      return {
        id: user.id,
        ho_ten: user.ho_ten,
        email: user.email 
      };
    }
    return null;
  }
}