import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvChannelsRoutingModule } from './tv-channels-routing.module';
import { SharedModule } from '../shared-module/shared.module';
import { TvChannelsComponent } from './tv-channels.component';

@NgModule({
  declarations: [TvChannelsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TvChannelsRoutingModule
  ]
})
export class TvChannelsModule { }
