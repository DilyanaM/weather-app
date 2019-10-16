import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  currentDate: Date;
  currentYear: number;
  darkModeActive: boolean;
  darkModeSubscription;

  constructor(private theme: ThemeService) { }

  ngOnInit() {
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.darkModeSubscription =
      this.theme.darkMode.subscribe(value => this.darkModeActive = value);
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
  }

}
