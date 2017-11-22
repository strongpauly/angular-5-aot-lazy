import {enableProdMode, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule, Title} from '@angular/platform-browser';
import {AppRoutingModule} from './app.router';
import {HttpClientModule} from '@angular/common/http';

if (process.env.ENV !== 'development') {
    enableProdMode();
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule {
}
