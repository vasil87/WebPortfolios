import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  ngOnDestroy(): void {
    console.log(4);
  }
  ngOnInit(): void {
    console.log(3);
  }
}
