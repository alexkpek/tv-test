import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';

import { TvChannelsApiService } from './tv-channels.api.service';
import { TvChannel } from '../../models/tv-channel';
import { TvChannelsFilter } from '../../models/types';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { setChannels } from '../../state/app.actions';

@Injectable({
  providedIn: 'root'
})
export class TvChannelsService {
  private totalChannels: number;
  private tvChannels: TvChannel[];
  private filters: TvChannelsFilter[];

  constructor(private tvChannelsApi: TvChannelsApiService, private store: Store<AppState>) {}

  init() {
    return this.tvChannelsApi.fetchAllTVChannels()
      .pipe(
        tap((data: any) => {
          this.totalChannels = data.total;
          this.tvChannels = data.channelDetails.map(channel => new TvChannel(channel));
          this.store.dispatch(setChannels({ channels: this.tvChannels }));
          this.initFilters();
        })
      );
  }


  getFilters() {
    return this.filters;
  }

  private initFilters() {
    this.filters = this.tvChannels
      .reduce((genres: TvChannelsFilter[], channel: TvChannel) => {
        return genres.concat(channel.genres.map(g => ({ label: g.name, id: g.id })));
      }, [] as TvChannelsFilter[])
      .filter((item: TvChannelsFilter, index: number, items: TvChannelsFilter[]) => {
        return index === items.findIndex(i => i.id === item.id);
      });

    this.filters.unshift({ label: 'Все телеканалы', id: null });
  }
}
