import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {LazyComponent} from "./lazy.component";

@NgModule({
    declarations: [
        LazyComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: LazyComponent, pathMatch: 'full'},
        ])
    ],
    providers: [Title]
})
export class LazyModule {
}
