import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportproddComponent } from './reportprodd.component';

describe('ReportproddComponent', () => {
  let component: ReportproddComponent;
  let fixture: ComponentFixture<ReportproddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportproddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportproddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
