import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { ThemeService } from './services/theme.service';
import { WeatherService } from './services/weather.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ToggleSwitchComponent } from './components/common/toggle-switch/toggle-switch.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleSwitchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    ThemeService,
    WeatherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
