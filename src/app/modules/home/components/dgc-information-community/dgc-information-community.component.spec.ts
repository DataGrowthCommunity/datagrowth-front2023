import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DgcInformationCommunityComponent } from './dgc-information-community.component';

describe('DgcInformationCommunityComponent', () => {
  let component: DgcInformationCommunityComponent;
  let fixture: ComponentFixture<DgcInformationCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcInformationCommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcInformationCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
