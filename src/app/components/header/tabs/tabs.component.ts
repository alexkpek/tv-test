import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BaseState } from '../../../state/app.state';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor(private store: Store<{ app: BaseState }>) {
  }

  ngOnInit() {
  }

}
