import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/header/tabs/tabs.component';
import { SharedModule } from './shared-module/shared.module';
import * as appReducer from './state/app.reducer';
import { persistStateReducer } from './state/persist-state.reducer';
import { bootstrap } from './services/bootstrap';
import { TvChannelsService } from './shared-module/services/tv-channels.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    StoreModule.forRoot({
      app: appReducer.reducer
    }, {
      metaReducers: [persistStateReducer]
    })
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: bootstrap, deps: [TvChannelsService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
