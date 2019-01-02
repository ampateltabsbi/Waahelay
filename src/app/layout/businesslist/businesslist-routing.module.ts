import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinesslistComponent } from './businesslist.component';

const routes: Routes = [
  {
      path: '',
      component: BusinesslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinesslistRoutingModule { }
