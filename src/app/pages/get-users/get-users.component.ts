import { Component, OnInit } from '@angular/core';

import {UsersServiceService} from 'src/app/services/users-service.service'
import { IUsers } from 'src/app/interfaces/AllUsers.interface';
import {users} from 'src/app/models/users.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit {

  constructor(private UsersService:UsersServiceService , private http: HttpClient) { }
  allUsers:Array<any> =[]
  allUsersFIlter:Array<any> =[]
  ngOnInit(): void {
    this.getUsers()
    }
    HideUsers(i:string){
      this.allUsersFIlter=[]
      this.allUsers.forEach(element =>{
        // if( element.dob )
    if ( element.dob.substring(5, 7) ==  i )
      this.allUsersFIlter.push(element)  
      console.log(this.allUsers)
      console.log(this.allUsersFIlter)
      this.allUsers =  this.allUsersFIlter
      }) 
    }

  getUsers(){
    this.allUsers = []
    this.UsersService.getAllUsers().subscribe(
     data =>{
      this.allUsers =  data
   
     }
  
    )
    
   }
   
}
