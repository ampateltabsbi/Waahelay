import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorytypeRoutingModule } from './categorytype-routing.module';
import { CategorytypeComponent } from './categorytype.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';
// import { FilterPipe } from './../../shared/pipes/grd-filter.pipe';

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [CommonModule, CategorytypeRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule, ToastrModule.forRoot()],
  declarations: [CategorytypeComponent]
})

export class CategorytypeModule { }








