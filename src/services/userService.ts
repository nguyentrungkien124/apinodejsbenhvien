import { injectable } from 'tsyringe';
import { UserRepository } from '../repositories/userRepository';

@injectable()
export class UserService {
  constructor(private userRepository: UserRepository
  ) {}
  
  async createUser(user: any): Promise<any> {
    return this.userRepository.createUser(user);
  }

  async authenticate(username: string, password: string): Promise<any> {     
    let user = await this.userRepository.GetUserByAccount(username, password);
    if (user) { 
      return {
        user_id: user.user_id,
        hoten: user.hoten,
        username: user.username 
      };
    }
    return null;
  }
}