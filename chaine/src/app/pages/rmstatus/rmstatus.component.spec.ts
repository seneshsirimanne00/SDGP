import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmstatusComponent } from './rmstatus.component';

describe('RmstatusComponent', () => {
  let component: RmstatusComponent;
  let fixture: ComponentFixture<RmstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
