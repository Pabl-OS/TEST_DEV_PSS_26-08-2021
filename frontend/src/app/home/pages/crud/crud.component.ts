import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/interface/customer.interface';
import { People } from 'src/app/interface/people.interface';
import { ApiTokaService } from 'src/app/services/api-toka.service';

import Swal from 'sweetalert2'



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  peoples:People[]=[];
  

  constructor(private crudS:ApiTokaService ) {
    this.getAllPeople(); 
   }


   getAllPeople(){
    this.crudS.getAllInfoPeople().subscribe((people) => {
      this.peoples=people;
    })
   }

  delete(people:People) {
    Swal.fire({
      title: `Quieres Eliminar a ${people.Nombre} `,
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.crudS.deleteInfoPeople(people).subscribe(resp => {
         if (resp.ok) {
           this.getAllPeople();
         }
          
        })
      }
    })
    
    
  }



  ngOnInit(): void {
  }

  


}
