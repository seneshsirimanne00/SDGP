import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportrmsComponent } from './reportrms.component';

describe('ReportrmsComponent', () => {
  let component: ReportrmsComponent;
  let fixture: ComponentFixture<ReportrmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportrmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportrmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
