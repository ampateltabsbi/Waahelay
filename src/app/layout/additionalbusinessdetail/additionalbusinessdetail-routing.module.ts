import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionalbusinessdetailComponent } from './additionalbusinessdetail.component';

const routes: Routes = [
  {
      path: '',
      component: AdditionalbusinessdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionalbusinessdetailRoutingModule { }
