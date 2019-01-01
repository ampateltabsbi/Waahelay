import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessvarifationRoutingModule } from './businessvarifation-routing.module';
import { BusinessvarifationComponent } from './businessvarifation.component';
import { PageHeaderModule } from '../../shared';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  imports: [CommonModule, BusinessvarifationRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule, ToastrModule.forRoot()],
  declarations: [BusinessvarifationComponent]
})
export class BusinessvarificationModule {}
