import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren:() => import('./home/home.module').then(m => m.HomeModule),
    canLoad:[AuthGuard],
    canActivate:[AuthGuard] 
  },
  {
    path: 'login', 
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule),
    
  },
  {
    path: '**', 
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
