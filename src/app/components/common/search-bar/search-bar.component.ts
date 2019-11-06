import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import country from 'country-list-js';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public capital: any;

  capitals: Array<String> = country.capitals();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(capitalName => capitalName.length < 3 ? []
        : this.capitals
          .filter(capital => capital.toLowerCase()
            .indexOf(capitalName.toLowerCase()) > -1)
            .slice(0, 10))
    );

  constructor() { }

  ngOnInit() {
    // console.log(country.capitals())
  }

}
