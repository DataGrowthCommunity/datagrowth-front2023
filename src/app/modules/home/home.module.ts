import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DgcBannerComponent } from './components/dgc-banner/dgc-banner.component';
import { DgcInformationCommunityComponent } from './components/dgc-information-community/dgc-information-community.component';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent,
    DgcBannerComponent,
    DgcInformationCommunityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class HomeModule { }
