import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitermdpComponent } from './monitermdp.component';

describe('MonitermdpComponent', () => {
  let component: MonitermdpComponent;
  let fixture: ComponentFixture<MonitermdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitermdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitermdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
