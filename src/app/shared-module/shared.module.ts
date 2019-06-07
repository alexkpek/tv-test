import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SelectComponent } from './components/select/select.component';
import { TvChannelComponent } from './components/tv-channel/tv-channel.component';

@NgModule({
  declarations: [SelectComponent, TvChannelComponent],
  exports: [
    SelectComponent,
    TvChannelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
