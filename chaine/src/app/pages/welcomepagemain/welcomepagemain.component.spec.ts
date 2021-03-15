import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomepagemainComponent } from './welcomepagemain.component';

describe('WelcomepagemainComponent', () => {
  let component: WelcomepagemainComponent;
  let fixture: ComponentFixture<WelcomepagemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomepagemainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomepagemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
