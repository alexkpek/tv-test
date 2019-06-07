import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { BaseState } from '../../state/app.state';
import * as fromRoot from '../../state/app.selectors';
import { CurrentPage } from '../../models/types';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  filterBy: string;
  orderBy: string;

  constructor(private store: Store<{ app: BaseState }>) {
    this.store.pipe(
      takeUntil(this.destroy$),
      select(fromRoot.selectFilterAndOrder)
    )
      .subscribe(({ filterBy, orderBy }) => {
        this.filterBy = filterBy;
        this.orderBy = orderBy;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
