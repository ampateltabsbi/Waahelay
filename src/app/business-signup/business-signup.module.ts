import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BusinessSignupRoutingModule } from './business-signup-routing.module';
import { BusinessSignupComponent } from './business-signup.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BusinessSignupRoutingModule],
declarations: [BusinessSignupComponent]
})
export class BusinessSignupModule { }
