import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {HomeComponent} from "./home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: HomeComponent, pathMatch: 'full'},
        ])
    ],
    providers: [Title]
})
export class HomeModule {
}
