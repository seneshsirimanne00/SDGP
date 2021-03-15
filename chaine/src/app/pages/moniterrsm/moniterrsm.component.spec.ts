import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniterrsmComponent } from './moniterrsm.component';

describe('MoniterrsmComponent', () => {
  let component: MoniterrsmComponent;
  let fixture: ComponentFixture<MoniterrsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoniterrsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniterrsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
