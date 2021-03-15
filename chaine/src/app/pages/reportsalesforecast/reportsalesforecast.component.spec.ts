import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsalesforecastComponent } from './reportsalesforecast.component';

describe('ReportsalesforecastComponent', () => {
  let component: ReportsalesforecastComponent;
  let fixture: ComponentFixture<ReportsalesforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsalesforecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsalesforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
