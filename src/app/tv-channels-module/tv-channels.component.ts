import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TvChannelsService } from '../shared-module/services/tv-channels.service';
import { TvChannel } from '../models/tv-channel';
import { AppState } from '../state/app.state';
import { selectTvChannels } from '../state/app.selectors';

@Component({
  selector: 'app-tv-channels',
  templateUrl: './tv-channels.component.html',
  styleUrls: ['./tv-channels.component.scss']
})
export class TvChannelsComponent implements OnInit {
  tvChannels$: Observable<TvChannel[]>;

  constructor(private tvChannelsService: TvChannelsService, private store: Store<AppState>) {
    this.tvChannels$ = this.store.select(selectTvChannels);
  }

  ngOnInit() {
  }
}
