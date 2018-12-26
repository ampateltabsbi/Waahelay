
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorydescriptionRoutingModule } from './categorydescription-routing.module';
import { CategorydescriptionComponent } from './categorydescription.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';
// import { FilterPipe } from './../../shared/pipes/grd-filter.pipe';

@NgModule({
    // tslint:disable-next-line:max-line-length
    imports: [CommonModule, CategorydescriptionRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule, ToastrModule.forRoot()],
    declarations: [CategorydescriptionComponent]
})
export class CategorydescriptionModule {}
