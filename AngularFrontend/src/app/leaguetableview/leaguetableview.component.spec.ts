import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguetableviewComponent } from './leaguetableview.component';

describe('LeaguetableviewComponent', () => {
  let component: LeaguetableviewComponent;
  let fixture: ComponentFixture<LeaguetableviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguetableviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguetableviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
