import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbusinessdetailComponent } from './addbusinessdetail.component';

const routes: Routes = [
    {
        path: '',
        component: AddbusinessdetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddbusinessdetailRoutingModule {}
