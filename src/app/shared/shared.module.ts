import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DgcFooterComponent } from './components/dgc-footer/dgc-footer.component';
import { DgcHeaderComponent } from './components/dgc-header/dgc-header.component';

@NgModule({
  declarations: [
    DgcFooterComponent,
    DgcHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DgcFooterComponent,
    DgcHeaderComponent
  ]
})
export class SharedModule { }
