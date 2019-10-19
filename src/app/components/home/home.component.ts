import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities = ['London', 'New York', 'Paris', 'Sofia'];

  constructor() { }

  ngOnInit() {
  }

}
