import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandommatchviewComponent } from './randommatchview.component';

describe('RandommatchviewComponent', () => {
  let component: RandommatchviewComponent;
  let fixture: ComponentFixture<RandommatchviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandommatchviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandommatchviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
