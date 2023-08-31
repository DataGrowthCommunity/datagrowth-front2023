import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DgcFooterComponent } from './components/dgc-footer/dgc-footer.component';
import { DgcHeaderComponent } from './components/dgc-header/dgc-header.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    DgcFooterComponent,
    DgcHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    DgcFooterComponent,
    DgcHeaderComponent
  ]
})
export class SharedModule { }
