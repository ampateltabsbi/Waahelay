
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalbusinessdetailRoutingModule } from './additionalbusinessdetail-routing.module';
import { AdditionalbusinessdetailComponent } from './additionalbusinessdetail.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, AdditionalbusinessdetailRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule,
    ToastrModule.forRoot(), NgbModule.forRoot()],
  declarations: [AdditionalbusinessdetailComponent]
})
export class AdditionalbusinessdetailModule { }
