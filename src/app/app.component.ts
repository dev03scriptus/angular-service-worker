import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-service-worker';
  constructor(private swUpdate: SwUpdate){
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(event => {
        if (confirm('A new version is available. Load it?')) {
          window.location.reload();
        }
      });
    }
  }
}
