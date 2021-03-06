import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileManagementComponent } from './profile-management.component';

describe('ProfileManagementComponent', () => {
  let component: ProfileManagementComponent;
  let fixture: ComponentFixture<ProfileManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
