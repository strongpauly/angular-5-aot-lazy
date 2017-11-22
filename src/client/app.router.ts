import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: 'routes/lazy',
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
})
export class AppRoutingModule {
}
