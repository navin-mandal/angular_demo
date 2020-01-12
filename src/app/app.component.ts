import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /** 
   * templateUrl: './app.component.html',
   * ` is a tilda key
   * {{title}} - it is called interpulation
  */

  template: `
    <h1>Hey Guys!</h1>
    <p>{{myObject.location}}</p>
    
    <ul>
      <li *ngFor="let arr of myArr">{{ arr }}</li>
    </ul>

    <ul>
      <li *ngIf="myArr">Yeah, myArr exists.</li>
    </ul>
    <ul>
      <li *ngIf="!myArr">....</li>
    </ul>

    <ul>
      <li *ngIf="myArr1 == 'something'">Yeah, something exists.</li>
    </ul>
    <ul>
      <li *ngIf="myArr1 != 'something'">Yeah, I exists.</li>
    </ul>

    <div *ngIf="myArr2; then Tmpl1 else Tmpl2"></div>

    <ng-template #Tmpl1>Truth</ng-template>
    <ng-template #Tmpl2>False</ng-template>

    <br>

    <button [disabled]="buttonStatus == 'enabled'">My Button</button>

    `,

  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //title = 'hello-angular8';

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = ['him', 'hers', 'yours'];

  myArr1 = 'something';

  myArr2 = false;

  //property binding
  //buttonStatus = false;
  buttonStatus = 'enabled';
}
