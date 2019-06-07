import { Component, Input, OnInit } from '@angular/core';

import { TvChannel } from '../../../models/tv-channel';

@Component({
  selector: 'app-tv-channel',
  templateUrl: './tv-channel.component.html',
  styleUrls: ['./tv-channel.component.scss']
})
export class TvChannelComponent implements OnInit {
  @Input() channel: TvChannel;

  constructor() { }

  ngOnInit() {
  }

}
