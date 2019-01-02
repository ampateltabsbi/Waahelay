import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinesslistRoutingModule } from './businesslist-routing.module';
import { BusinesslistComponent } from './businesslist.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  imports: [CommonModule, BusinesslistRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule, ToastrModule.forRoot()],
  declarations: [BusinesslistComponent]
})
export class BusinesslistModule { }


