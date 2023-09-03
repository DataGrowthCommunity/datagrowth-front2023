import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DgcFooterComponent } from './dgc-footer.component';

describe('DgcFooterComponent', () => {
  let component: DgcFooterComponent;
  let fixture: ComponentFixture<DgcFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
