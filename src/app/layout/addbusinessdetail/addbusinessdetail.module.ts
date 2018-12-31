import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbusinessdetailRoutingModule } from './addbusinessdetail-routing.module';
import { AddbusinessdetailComponent } from './addbusinessdetail.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  imports: [CommonModule, AddbusinessdetailRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule, ToastrModule.forRoot()],
  declarations: [AddbusinessdetailComponent]
})
export class AddbusinessdetailModule {}
