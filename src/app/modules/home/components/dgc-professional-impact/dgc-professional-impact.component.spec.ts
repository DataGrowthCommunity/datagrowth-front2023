import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DgcProfessionalImpactComponent } from './dgc-professional-impact.component';

describe('DgcProfessionalImpactComponent', () => {
  let component: DgcProfessionalImpactComponent;
  let fixture: ComponentFixture<DgcProfessionalImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcProfessionalImpactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcProfessionalImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
