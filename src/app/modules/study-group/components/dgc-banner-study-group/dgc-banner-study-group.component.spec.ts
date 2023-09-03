import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcBannerStudyGroupComponent } from './dgc-banner-study-group.component';

describe('DgcBannerStudyGroupComponent', () => {
  let component: DgcBannerStudyGroupComponent;
  let fixture: ComponentFixture<DgcBannerStudyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcBannerStudyGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcBannerStudyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
