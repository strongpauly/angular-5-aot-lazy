import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: `
  	<div>
  	    <router-outlet (activate)="onActivate()"></router-outlet>
        <div class="view-container">
            <div ng-view class="view-frame">

            </div>
        </div>
    </div>`
})

export class AppComponent {
    onActivate() {
        console.log('Route activated');
    }
}

