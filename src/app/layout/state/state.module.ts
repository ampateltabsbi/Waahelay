import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [CommonModule, StateRoutingModule, PageHeaderModule, FormsModule, NgxPaginationModule, ToastrModule.forRoot()],
  declarations: [StateComponent]
})

export class CategorytypeModule { }
