
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessSignupComponent } from './business-signup.component';

const routes: Routes = [
  {
      path: '', component: BusinessSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessSignupRoutingModule { }
