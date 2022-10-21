import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice';

  public name="Ramesh ";
  public message="";
  public dataForCompOne: string = "Hi, I am 'comp-one' and I have the data of 'app' component";


  
}
