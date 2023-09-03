import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyGroupRoutingModule } from './study-group-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudyGroupComponent } from './study-group.component';
import { DgcBannerStudyGroupComponent } from './components/dgc-banner-study-group/dgc-banner-study-group.component';
import { DgcSelectStudyGroupComponent } from './components/dgc-select-study-group/dgc-select-study-group.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    StudyGroupComponent,
    DgcBannerStudyGroupComponent,
    DgcSelectStudyGroupComponent
  ],
  imports: [
    CommonModule,
    StudyGroupRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class StudyGroupModule { }
