import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvChannelsComponent } from './tv-channels.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {  path: '', component: TvChannelsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class TvChannelsRoutingModule { }
