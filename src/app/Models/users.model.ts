import { IUsers } from 'src/app/interfaces/AllUsers.interface';

export class users implements IUsers{
    constructor(
     public   id:number,
     public     firstName:string,
        public    lastName:string, 
        public     dob:string,

    ){}

   
}