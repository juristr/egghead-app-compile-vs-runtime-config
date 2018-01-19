import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
  `
})
export class AppComponent {
  title = 'app';

  constructor() {
    this.title = environment.appTitle;
  }
}
