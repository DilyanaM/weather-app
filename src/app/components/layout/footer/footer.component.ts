import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  currentDate: Date;
  currentYear: number;
  darkModeActive: boolean;
  darkModeSubscription: Subscription;

  constructor(private theme: ThemeService) { }

  ngOnInit() {
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.darkModeSubscription =
      this.theme.darkMode.subscribe(value => this.darkModeActive = value);
  }

  ngOnDestroy() {
    if (this.darkModeSubscription) {
      this.darkModeSubscription.unsubscribe();
    }
  }

}
