import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent implements OnInit, OnDestroy {
  @Output() changeTheme: EventEmitter<any> = new EventEmitter();

  darkModeActive: boolean;
  darkModeSubscription;

  faMoon = faMoon;
  faSun = faSun;

  constructor(public theme: ThemeService) { }

  ngOnInit() {
    this.darkModeSubscription = this.theme.darkMode.subscribe((value) => {
      this.darkModeActive = value;
    });
  }

  toggleTheme() {
    this.theme.darkMode.next(!this.darkModeActive);
    this.changeTheme.emit(this.darkModeActive);
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
  }

}
