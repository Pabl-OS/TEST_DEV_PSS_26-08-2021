import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';
import { People } from '../interface/people.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiTokaService {
  apiUrl: string="http://localhost:4000/api/"
  constructor(private httpC:HttpClient ) { }


  getToken(){
    return new HttpHeaders({
    'Content-Type': 'application/json',
      'Bearer':`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5MzU3MDAsImV4cCI6MTYzMDAyMjEwMH0.yMRysCm0n5ql3CqSQ6bI2-3PFdzl4teNm0qqjjeanaM`
    });
 
  }

  getAllInfoPeople(){

    return this.httpC.get<People>(`${this.apiUrl}people`, {headers: this.getToken()}).pipe(map((resp:any)=>{
      if (resp.ok) {         
        console.log(resp.personas);
        return resp.personas;
      } 
      }))
  }

  getInfoPeople(id:string){

    return this.httpC.get<People>(`${this.apiUrl}people/${id}`, {headers: this.getToken()}).pipe(map((resp:any)=>{
      if (resp.ok) {         
        return resp.persona[0];
      } 
      }))
  }
  updateInfoPeople(people:People){

    return this.httpC.put<People>(`${this.apiUrl}people/`,people ,{headers: this.getToken()}).pipe(map((resp:any)=>{         
        return resp.msg; 
      }))
  }
  createInfoPeople(people:People){

    return this.httpC.post<People>(`${this.apiUrl}people/`,people ,{headers: this.getToken()}).pipe(map((resp:any)=>{         
      console.log(resp);
      return resp; 
      }))
  }
  deleteInfoPeople(people:People){
    console.log(`${this.apiUrl}people/${people.IdPersonaFisica}`);
    return this.httpC.delete(`${this.apiUrl}people/${people.IdPersonaFisica}` ,{headers: this.getToken()}).pipe(map((resp:any)=>{         
      console.log(resp);
      return resp; 
      }))
  }


  

}
