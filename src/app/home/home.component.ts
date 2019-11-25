import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'angularFirstApp';
  months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov"];
  isavailable=false;
  a=10;
  b=20;
  
  name="your name"

  myClickFunction(event){
    alert("button pressed");
    console.log(event); 
  }


}
