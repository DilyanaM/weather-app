import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {

  darkMode: BehaviorSubject<boolean>;

  constructor() {
    this.darkMode = new BehaviorSubject<boolean>(false);
  }
}
