import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyregistrationpageComponent } from './companyregistrationpage.component';

describe('CompanyregistrationpageComponent', () => {
  let component: CompanyregistrationpageComponent;
  let fixture: ComponentFixture<CompanyregistrationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyregistrationpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyregistrationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
