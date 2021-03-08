import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelprofileComponent } from './sidepanelprofile.component';

describe('SidepanelprofileComponent', () => {
  let component: SidepanelprofileComponent;
  let fixture: ComponentFixture<SidepanelprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidepanelprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
