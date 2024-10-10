import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class UserRepository {
  constructor(private db: Database) { }  
  async createUser(user: any): Promise<any> {
    try {
      const sql = 'CALL InsertUser(?, ?, ?, ?)';
      await this.db.query(sql, [user.hoten, user.username, user.password, user.anh]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  } 

  async GetUserByAccount(username: string, password: string): Promise<any> {
    try {
      const sql = 'CALL GetUserByAccount(?,?)';
      const [results] = await this.db.query(sql, [username,password]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
}