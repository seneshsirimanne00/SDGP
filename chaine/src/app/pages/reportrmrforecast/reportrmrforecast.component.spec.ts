import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportrmrforecastComponent } from './reportrmrforecast.component';

describe('ReportrmrforecastComponent', () => {
  let component: ReportrmrforecastComponent;
  let fixture: ComponentFixture<ReportrmrforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportrmrforecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportrmrforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
