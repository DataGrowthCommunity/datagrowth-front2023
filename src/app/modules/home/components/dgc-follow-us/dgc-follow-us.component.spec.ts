import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DgcFollowUsComponent } from './dgc-follow-us.component';

describe('DgcFollowUsComponent', () => {
  let component: DgcFollowUsComponent;
  let fixture: ComponentFixture<DgcFollowUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcFollowUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcFollowUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
