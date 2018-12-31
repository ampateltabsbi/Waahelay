

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'category', loadChildren: './category/category.module#CategoryModule' },
            { path: 'categoryType', loadChildren: './categorytype/categorytype.module#CategorytypeModule' },
            { path: 'categorydescription', loadChildren: './categorydescription/categorydescription.module#CategorydescriptionModule' },
            { path: 'country', loadChildren: './country/country.module#CountryModule' },
            { path: 'state', loadChildren: './state/state.module#StateModule' },
            { path: 'city', loadChildren: './city/city.module#CityModule' },
            { path: 'addbusinessdetail', loadChildren: './addbusinessdetail/addbusinessdetail.module#AddbusinessdetailModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
