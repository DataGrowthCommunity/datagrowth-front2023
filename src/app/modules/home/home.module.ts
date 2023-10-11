import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DgcBannerComponent } from './components/dgc-banner/dgc-banner.component';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DgcBusinessAlliancesComponent } from './components/dgc-business-alliances/dgc-business-alliances.component';
import { DgcTestimonialsComponent } from './components/dgc-testimonials/dgc-testimonials.component';
import { DgcProfessionalImpactComponent } from './components/dgc-professional-impact/dgc-professional-impact.component';
import { DgcFollowUsComponent } from './components/dgc-follow-us/dgc-follow-us.component';

import { SlickCarouselModule } from 'ngx-slick-carousel'

@NgModule({
  declarations: [
    HomeComponent,
    DgcBannerComponent,
    DgcBusinessAlliancesComponent,
    DgcTestimonialsComponent,
    DgcProfessionalImpactComponent,
    DgcFollowUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
