import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPageComponent } from './co-page.component';

describe('CoPageComponent', () => {
  let component: CoPageComponent;
  let fixture: ComponentFixture<CoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
