import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  darkModeActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  onChangeTheme(value) {
    this.darkModeActive = value;
  }

}
