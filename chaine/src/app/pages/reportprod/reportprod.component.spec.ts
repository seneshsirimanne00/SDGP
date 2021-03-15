import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportprodComponent } from './reportprod.component';

describe('ReportprodComponent', () => {
  let component: ReportprodComponent;
  let fixture: ComponentFixture<ReportprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
