import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessvarifationComponent } from './businessvarifation.component';

const routes: Routes = [
    {
        path: '',
        component: BusinessvarifationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessvarifationRoutingModule {}
