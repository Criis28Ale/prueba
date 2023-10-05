import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreateLComponent } from './components/create-l/create-l.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full' },
  {path:"menu", component:MenuComponent},
  {path:"login", component:LoginComponent},
  {path:"create-l", component:CreateLComponent},
  {path:"principal", component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
