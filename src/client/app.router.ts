import {NgModule, ANALYZE_FOR_ENTRY_COMPONENTS} from "@angular/core";
import {RouterModule, Routes, ROUTES} from "@angular/router";

export const routes: Routes = [
    {
        path: 'lazy',
        loadChildren: './routes/lazy/lazy.module#LazyModule',
    },
    {
        path: '',
        loadChildren: './routes/home/home.module#HomeModule',
    }
];

export function getRoutes() {
    return routes;
}

@NgModule({
    imports: [RouterModule.forRoot(getRoutes())],
    exports: [RouterModule],
    // providers: [
    //     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: [routes]},
    //     {provide: ROUTES, multi: true, useFactory: getRoutes}
    // ]
})
export class AppRoutingModule {
}
