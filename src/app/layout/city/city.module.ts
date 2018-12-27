import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  imports: [CommonModule, CityRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule, ToastrModule.forRoot()],
  declarations: [CityComponent]
})
export class CityModule {}
