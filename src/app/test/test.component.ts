import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2> welcome {{name}}</h2>
  <h2>{{2+2}}</h2>
  <h2>{{siteUrl}}</h2>
  <!-- <input type="text" value="mrunal"> -->

  <h2 class="text-success">codeevolution</h2>
  <h2 [style.color]="hasError?'red' : 'green'">Style binding</h2>
  <h2 [style.color]="highlightColor">Style binding</h2>

<button (click)="onClick()">greet</button>
{{greeting}}

//directives
<h2 *ngIf="displayName; else elseBlock"> hello</h2>

<ng-template #elseBlock>
<h2>name is hidden</h2>
</ng-template>

<div *ngIf="displayName; then thenBlock;else elseBlock"> </div>
<ng-template #thenBlock>
<h2>Hello there</h2>
</ng-template>

<ng-template #elseBlock>
  <h2>Hidden</h2>
</ng-template>

<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">picked red color</div>
  <div *ngSwitchCase="'blue'">picked blue color</div>
</div>

<div *ngFor="let color of colors; index as i">
  <h2>{{i}} {{color}}</h2>  
</div>

<h2>{{"hello " + parentData}}</h2>

<button (click)="fireEvent()"> send </button>
 
<h2>{{name | uppercase}}</h2>
<h2>{{name | slice:3:5}}</h2>
<h2>{{name | json}}</h2>

<h2>{{0.25 | currency}}</h2>
<h2>{{0.25 | currency:'EUR':'code'}}</h2>
<h2>{{date}}</h2> 

  `,
  styles: [`div{
    color:red;
    }
    .text-success{
      color:green;
  } `]
})
export class TestComponent implements OnInit {

public date=new Date();

public colors=["red","blue","green"]

displayName=true;

public color="red"

public name=" kunal";

public siteUrl=window.location.href;

public successClass="text-success"

public hasError=true;

public highlightColor="orange";

public greeting=""

@Input() public parentData: any;

@Output() public childEvent =new EventEmitter();



fireEvent(){
  this.childEvent.emit("hello for this side")
}

onClick() {
  console.log("welcoe")
  this.greeting="welcome 1";

}
  constructor() { }

  ngOnInit(): void {
  }

}
