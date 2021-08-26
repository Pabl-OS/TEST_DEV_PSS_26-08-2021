import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interface/people.interface';
import { ApiTokaService } from 'src/app/services/api-toka.service';

@Component({
  selector: 'app-createp',
  templateUrl: './createp.component.html',
  styleUrls: ['./createp.component.css']
})
export class CreatepComponent implements OnInit {
  peopleInfo:People= {};
  constructor(private tokaS:ApiTokaService) { }

  ngOnInit(): void {
  }


  createPeople(){
    this.tokaS.createInfoPeople(this.peopleInfo).subscribe(params=>{
   console.log(params);
   
 })
}

}
