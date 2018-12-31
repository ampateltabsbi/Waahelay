import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BusinessLoginRoutingModule } from './business-login-routing.module';
import { BusinessLoginComponent } from './business-login.component';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BusinessLoginRoutingModule],
declarations: [BusinessLoginComponent]
})
export class BusinessLoginModule { }
