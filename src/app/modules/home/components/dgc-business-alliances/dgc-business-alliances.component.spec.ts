import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DgcBusinessAlliancesComponent } from './dgc-business-alliances.component';

describe('DgcBusinessAlliancesComponent', () => {
  let component: DgcBusinessAlliancesComponent;
  let fixture: ComponentFixture<DgcBusinessAlliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcBusinessAlliancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcBusinessAlliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
