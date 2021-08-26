import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface login {
 email?:    string;
 password?: string;
};

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  login:login ={}

  constructor(private authS:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  

  loginU(){
   this.authS.loginApiCrud(this.login).subscribe((resp:any)=>{
     if(resp.ok){
       this.router.navigateByUrl('/home');
     }
   })

  }
}
