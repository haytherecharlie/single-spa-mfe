import { Component, OnInit } from "@angular/core";
import packageInfo from "../../package.json";

@Component({
  selector: "my-app-root",
  template: `
    <div id="offers">
      <span>{{ title }}</span>
      <a routerLink="/know-your-client">Go to Know Your Client</a>
      <ul id="package-data">
        <li *ngFor="let dep of deps | keyvalue">
          {{ dep.key }}: {{ dep.value }}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      #offers {
        background-color: papayawhip;
        height: calc(100vh - 20px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      span {
        font-family: Arial, Helvetica, sans-serif;
      }
      #package-data {
        border: 1px solid #000;
        padding: 10px;
        border-radius: 8px;
        margin: 10px;
        list-style-type: none;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  public keepOriginalOrder = (a: { [key: string]: string }) => a.key;
  public deps = { ...packageInfo }.dependencies;
  public title = "Offers";

  ngOnInit() {
    console.log(`*************************************`);
    console.log(`Loaded: ${this.title} widget remotely`);
    console.log(`*************************************`);
  }
}
