import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiUrl:string = 'http://localhost:4000/api/auth/login'
  constructor(private http: HttpClient) { }
 
  loginApiCrud(login:any){
    return this.http.post(`${this.apiUrl}`,login).pipe(map((resp:any)=>{
      if (resp.ok) {         
        localStorage.setItem('token',resp.token);
        return resp;
      } 
      }))
  }

  isAutenticate(){
     if (localStorage.getItem('token')) {
       return true;  
     }
     return false;
    
  }
}
