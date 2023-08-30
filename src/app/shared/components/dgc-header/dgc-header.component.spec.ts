import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcHeaderComponent } from './dgc-header.component';

describe('DgcHeaderComponent', () => {
  let component: DgcHeaderComponent;
  let fixture: ComponentFixture<DgcHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
