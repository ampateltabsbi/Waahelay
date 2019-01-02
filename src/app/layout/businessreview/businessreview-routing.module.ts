import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessreviewComponent } from './businessreview.component';

const routes: Routes = [
  {
      path: '',
      component: BusinessreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessreviewRoutingModule { }


