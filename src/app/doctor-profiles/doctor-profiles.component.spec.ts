import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfilesComponent } from './doctor-profiles.component';

describe('DoctorProfilesComponent', () => {
  let component: DoctorProfilesComponent;
  let fixture: ComponentFixture<DoctorProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
