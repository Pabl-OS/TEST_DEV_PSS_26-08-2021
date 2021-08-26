import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../interface/customer.interface';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TokaService {
  

  apiUrlToka:string = 'https://api.toka.com.mx/candidato/api/customers';
  constructor(private httpToka: HttpClient ) {

  }
   
   getTokenApi(user:any){
   return this.httpToka.post(`https://api.toka.com.mx/candidato/api/login/authenticate`,user );
  

  
 
  }

   getDataToka(token:any): Promise<any>{
    const httpHeaders= new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:`Bearer ${token}`
      })
  return this.httpToka.get(`${this.apiUrlToka}`,{headers: httpHeaders}).
  toPromise();
  }
}
