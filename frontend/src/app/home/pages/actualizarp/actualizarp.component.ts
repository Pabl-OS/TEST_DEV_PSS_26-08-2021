import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customer } from 'src/app/interface/customer.interface';
import { People } from 'src/app/interface/people.interface';
import { ApiTokaService } from 'src/app/services/api-toka.service';

@Component({
  selector: 'app-actualizarp',
  templateUrl: './actualizarp.component.html',
  styleUrls: ['./actualizarp.component.css']
})
export class ActualizarpComponent implements OnInit {

  peopleInfo:People= {};

  constructor(private activatedRoute :ActivatedRoute,private tokaS:ApiTokaService) { 
    this.activatedRoute.params.subscribe(params =>{
     this.getInfoPeople(params.id);
     })
  }

  getInfoPeople(id:string) {
   this.tokaS.getInfoPeople(id).subscribe(params=>{
       this.peopleInfo= params;
     console.log(this.peopleInfo); 
   })
  }

  updatePeople(){
   console.log(this.peopleInfo);
   this.tokaS.updateInfoPeople(this.peopleInfo).subscribe(params=>{
  console.log(params);
  
})
   
  }

  ngOnInit(): void {
  }

}
