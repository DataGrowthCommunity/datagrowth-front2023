import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcBannerComponent } from './dgc-banner.component';

describe('DgcBannerComponent', () => {
  let component: DgcBannerComponent;
  let fixture: ComponentFixture<DgcBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
