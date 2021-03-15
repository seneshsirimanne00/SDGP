import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportimComponent } from './reportim.component';

describe('ReportimComponent', () => {
  let component: ReportimComponent;
  let fixture: ComponentFixture<ReportimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
