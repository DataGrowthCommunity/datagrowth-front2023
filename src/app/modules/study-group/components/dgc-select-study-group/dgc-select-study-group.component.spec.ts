import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcSelectStudyGroupComponent } from './dgc-select-study-group.component';

describe('DgcSelectStudyGroupComponent', () => {
  let component: DgcSelectStudyGroupComponent;
  let fixture: ComponentFixture<DgcSelectStudyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcSelectStudyGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcSelectStudyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
