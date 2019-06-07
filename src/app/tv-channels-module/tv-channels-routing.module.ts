import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvChannelsComponent } from './tv-channels.component';

const routes: Routes = [
  {  path: '', component: TvChannelsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [TvChannelsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvChannelsRoutingModule { }
