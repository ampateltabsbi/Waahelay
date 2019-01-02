import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessreviewRoutingModule } from './businessreview-routing.module';
import { BusinessreviewComponent } from './businessreview.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  imports: [CommonModule, BusinessreviewRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule, ToastrModule.forRoot()],
  declarations: [BusinessreviewComponent]
})
export class BusinessreviewModule { }

