import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniterppComponent } from './moniterpp.component';

describe('MoniterppComponent', () => {
  let component: MoniterppComponent;
  let fixture: ComponentFixture<MoniterppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoniterppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniterppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
