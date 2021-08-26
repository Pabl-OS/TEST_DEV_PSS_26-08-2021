import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //  routes for menu
  routes:any[] =[
    {
      title:'Crud P. Fisicas',
      path: './pfisicas',
      icon:'grid_on'
    },
    {
      title:'crear- persona',
      path: './crear-persona',
      icon:'group_add'
    },
    {
      title:'reporte',
      path: './login-toka',
      icon:'poll'
    },

   ]


  constructor() { }

  ngOnInit(): void {
  }

}
