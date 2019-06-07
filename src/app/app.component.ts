import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { filter } from 'rxjs/operators';

import { BaseState } from './state/app.state';
import { navigation } from './state/app.actions';
import { CurrentPage } from './models/types';
import { selectCurrentPage } from './state/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private store: Store<BaseState>) {
    this.store.select(selectCurrentPage)
      .pipe(filter(page => !!page))
      .subscribe(page => this.router.navigate([page]));

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => {
        const page = (e as NavigationEnd).url.slice(1) as unknown as CurrentPage;
        this.store.dispatch(navigation({ currentPage: page }));
      });
  }
}
