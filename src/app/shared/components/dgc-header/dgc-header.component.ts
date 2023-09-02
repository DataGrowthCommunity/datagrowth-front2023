import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dgc-header',
  templateUrl: './dgc-header.component.html',
  styleUrls: ['./dgc-header.component.scss']
})
export class DgcHeaderComponent {

  constructor(private offcanvasService: NgbOffcanvas) { }

  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

}
