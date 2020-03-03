import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent implements OnInit, OnDestroy {
  @Output() changeTheme: EventEmitter<any> = new EventEmitter();

  darkModeActive: boolean;
  darkModeSubscription: Subscription;

  faMoon = faMoon;
  faSun = faSun;

  constructor(public theme: ThemeService) { }

  ngOnInit() {
    this.darkModeSubscription =
      this.theme.darkMode.subscribe(value => this.darkModeActive = value);
  }

  toggleTheme() {
    this.theme.darkMode.next(!this.darkModeActive);
    this.changeTheme.emit(this.darkModeActive);
  }

  ngOnDestroy() {
    if (this.darkModeSubscription) {
      this.darkModeSubscription.unsubscribe();
    }
  }

}
