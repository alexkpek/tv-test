import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentPage } from './models/types';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full'
  },
  {
    path: CurrentPage.FIRST,
    loadChildren: () => import('./first-module/first.module').then(m => m.FirstModule)
  },
  {
    path: CurrentPage.SECOND,
    loadChildren: () => import('./second-module/second.module').then(m => m.SecondModule)
  },
  {
    path: CurrentPage.TV_CHANNELS,
    loadChildren: () => import('./tv-channels-module/tv-channels.module').then(m => m.TvChannelsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
