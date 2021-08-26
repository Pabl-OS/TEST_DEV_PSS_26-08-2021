import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokaService } from 'src/app/services/toka.service';

 interface UserToka {
  Username?:string;
  Password?:string;
}

@Component({
  selector: 'app-auth-toka',
  templateUrl: './auth-toka.component.html',
  styleUrls: ['./auth-toka.component.css']
})
export class AuthTokaComponent implements OnInit {
   
  usrToka:UserToka={
    Username:'ucand0021',
    Password:'yNDVARG80sr@dDPc2yCT!'
  };
  constructor(private authT:TokaService, private router:Router) { }

  ngOnInit(): void {

  }

  loginToka(){
   this.authT.getTokenApi(this.usrToka).subscribe((resp:any)=>{
      if(resp.Data){
        this.router.navigateByUrl(`/home/reporte/${resp.Data}`);
      }
   })
  }

}
