import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvChannelComponent } from './tv-channel.component';

describe('TvChannelComponent', () => {
  let component: TvChannelComponent;
  let fixture: ComponentFixture<TvChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
