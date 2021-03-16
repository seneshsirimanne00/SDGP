import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminregistrationpageComponent } from './adminregistrationpage.component';

describe('AdminregistrationpageComponent', () => {
  let component: AdminregistrationpageComponent;
  let fixture: ComponentFixture<AdminregistrationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminregistrationpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminregistrationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
