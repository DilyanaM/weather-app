import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Weather App';
  darkModeActive: boolean;
  darkModeSubscription;

  constructor(public theme: ThemeService) {}

  ngOnInit() {
    this.darkModeSubscription =
      this.theme.darkMode.subscribe(value => this.darkModeActive = value);
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
  }
}
