import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';   
@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {  
  Url :string;   
  header : any;  
  constructor(private http : HttpClient) {   

    this.Url = 'https://localhost:7208/api/Account/externalLogin';  

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  
  Login(model : any){  
    debugger;  

     var a =this.Url+'UserLogin';  
     this.postUser();
   return this.http.post<any>(this.Url,model,{ headers: this.header});  
  }  
   
   postUser=async()=>{
    console.log("Enter");
   let response=await fetch("https://localhost:7208/api/Account/externalLogin",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify({
          "id": 1,
          "username": "admin",
          "approvedby": 0,
          "password": "admin",
          "domain": "string",
          "roles": "string",
          "userType": "string",
          "menuAccess": "string",
          "employeeId": 0,
          "customerId": 0,
          "isDeleted": true,
          "createdBy": 0,
          "createdDate": "2023-01-06T08:16:05.605Z",
          "employeeName": "string",
          "salesPersonName": "string",
          "isAdmin": true,
          "isAdmin123": true,
          "ccId": 0
        })
    
    }).then(r => r.json());
    console.log(response);
}  }
