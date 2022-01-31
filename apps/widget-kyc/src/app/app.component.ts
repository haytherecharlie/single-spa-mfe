import { Component, OnInit } from '@angular/core';
import * as packageInfo from '../../package.json';

@Component({
  selector: 'widget-kyc-root',
  template: `
    <div id="know-your-client">
      <span>{{ title }}</span>
      <a routerLink="/">Go Back to Offers</a>
      <ul id="package-data">
        <li *ngFor="let dep of deps | keyvalue">
          {{ dep.key }}: {{ dep.value }}
        </li>
      </ul>
    </div>
  `})
export class AppComponent implements OnInit {
  public keepOriginalOrder = (a: { [key: string]: string }) => a.key;
  public deps = { ...packageInfo }.dependencies;
  public title = 'Know Your Client';

  ngOnInit() {
    console.log(`*************************************`);
    console.log(`Loaded: ${this.title} widget remotely`);
    console.log(`*************************************`);
  }
}
