import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { CrudComponent } from './pages/crud/crud.component';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import { MatTableExporterModule } from 'mat-table-exporter';
import {MatCardModule} from '@angular/material/card';
import { CreatepComponent } from './pages/createp/createp.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActualizarpComponent } from './pages/actualizarp/actualizarp.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AuthTokaComponent } from './pages/auth-toka/auth-toka.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReporteComponent,
    CrudComponent,
    CreatepComponent,
    ActualizarpComponent,
    AuthTokaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableExporterModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule

  ]
})
export class HomeModule { }
