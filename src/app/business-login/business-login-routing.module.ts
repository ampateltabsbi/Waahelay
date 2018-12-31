import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessLoginComponent } from './business-login.component';

const routes: Routes = [
  {
      path: '',
      component: BusinessLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessLoginRoutingModule { }
