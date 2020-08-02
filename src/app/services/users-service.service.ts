import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/AllUsers.interface';
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

// public url: string = `https://yalantis-react-school-api.yalantis.com/api/task0/users` ;

  getAllUsers():Observable<Array<IUsers>>{
    return  this.http.get<Array<IUsers>>(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
  }

}
