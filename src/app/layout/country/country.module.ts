
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
    imports: [CommonModule, CountryRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule, ToastrModule.forRoot()],
    declarations: [CountryComponent]
})
export class CountryModule {}

