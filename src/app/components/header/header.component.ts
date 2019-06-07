import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState } from '../../state/app.state';
import * as fromRoot from '../../state/app.selectors';
import { TvChannelsFilter, TvChannelsOrder } from '../../models/types';
import { TvChannelsService } from '../../shared-module/services/tv-channels.service';
import { setFilter, setOrder } from '../../state/app.actions';

interface SelectOrderItem {
  label: string;
  id: TvChannelsOrder;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  orders = [
    { label: 'По возрастанию (А-Я)', id: TvChannelsOrder.ASC },
    { label: 'По убыванию (Я-А)', id: TvChannelsOrder.DESC }
  ];
  filters: TvChannelsFilter[];
  filterBy: TvChannelsFilter;
  orderBy: SelectOrderItem;

  constructor(private store: Store<AppState>, private tvChannelsService: TvChannelsService) {
    this.filters = this.tvChannelsService.getFilters();

    this.store.pipe(
      takeUntil(this.destroy$),
      select(fromRoot.selectFilterAndOrder)
    )
      .subscribe(({ filterBy, orderBy }) => {
        this.filterBy = filterBy;
        this.orderBy = this.orders.find(o => o.id === orderBy);

        if (!filterBy) {
          this.onFilterReset();
        }
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onFilterChange(filterBy: TvChannelsFilter) {
    const val = filterBy ? filterBy.id ? filterBy : null : null;
    this.store.dispatch(setFilter({ filterBy: val }));
  }

  onFilterReset() {
    this.store.dispatch(setFilter({ filterBy: null }));
  }

  onOrderChange(orderBy: SelectOrderItem) {
    this.store.dispatch(setOrder({ orderBy: orderBy.id }));
  }

  onOrderReset() {
    this.store.dispatch(setOrder({ orderBy: null }));
  }
}
