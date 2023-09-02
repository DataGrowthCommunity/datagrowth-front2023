import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DgcTestimonialsComponent } from './dgc-testimonials.component';

describe('DgcTestimonialsComponent', () => {
  let component: DgcTestimonialsComponent;
  let fixture: ComponentFixture<DgcTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcTestimonialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
