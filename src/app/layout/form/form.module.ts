import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, NgxPaginationModule],
    declarations: [FormComponent]
})
export class FormModule {}
