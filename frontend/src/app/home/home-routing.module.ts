import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActualizarpComponent } from './pages/actualizarp/actualizarp.component';
import { AuthTokaComponent } from './pages/auth-toka/auth-toka.component';
import { CreatepComponent } from './pages/createp/createp.component';
import { CrudComponent } from './pages/crud/crud.component';
import { HomeComponent } from './pages/home/home.component';
import { ReporteComponent } from './pages/reporte/reporte.component';

const routes: Routes = [
{
 path: '',
component:HomeComponent,
children: [
    {
      path: 'crud',
      component:CrudComponent
    },
    {
      path: 'login-toka',
      component:AuthTokaComponent
    },
    {
      path: 'crear-persona',
      component:CreatepComponent
    },
    {
      path: 'reporte/:id',
      component:ReporteComponent
    },
    {
      path: 'upd-persona/:id',
      component:ActualizarpComponent
    },
    {
      path: '**',
      redirectTo:'crud'
    }
  ],

 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
