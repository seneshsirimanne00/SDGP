import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedmatchesviewComponent } from './playedmatchesview.component';

describe('PlayedmatchesviewComponent', () => {
  let component: PlayedmatchesviewComponent;
  let fixture: ComponentFixture<PlayedmatchesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayedmatchesviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayedmatchesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
