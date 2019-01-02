import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessprofileRoutingModule } from './businessprofile-routing.module';
import { BusinessprofileComponent } from './businessprofile.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  imports: [CommonModule, BusinessprofileRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule, ToastrModule.forRoot()],
  declarations: [BusinessprofileComponent]
})
export class BusinessprofileModule { }

