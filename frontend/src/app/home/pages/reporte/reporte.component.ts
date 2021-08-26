import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { customer } from 'src/app/interface/customer.interface';
import { TokaService } from 'src/app/services/toka.service';



@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator:any;
  
   
  constructor(private tokaService: TokaService,private activatedRoute:ActivatedRoute ){
    this.activatedRoute.params.subscribe(params =>{
      
      this.tokaService.getDataToka(params.id).then(data => {
        this.dataSource = data['Data'];
        this.dataSource.paginator = this.paginator; 
      });
    })
  }
  dataSource = new MatTableDataSource();
  

  displayedColumns: string[] = [
    'IdCliente',
    'FechaRegistroEmpresa',
    'RazonSocial',
    'RFC',
    'Sucursal',
    'IdEmpleado',
    'Nombre',
    'Paterno',
    'Materno',
    'IdViaje',
  ];
  
  ngAfterViewInit() {

        
      
  } 
  


}


