import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/header/tabs/tabs.component';
import { SharedModule } from './shared-module/shared.module';
import * as appReducer from './state/app.reducer';
import { persistStateReducer } from './state/persist-state.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({
      app: appReducer.reducer
    }, {
      metaReducers: [persistStateReducer]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
