import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dgc-header',
  templateUrl: './dgc-header.component.html',
  styleUrls: ['./dgc-header.component.scss']
})
export class DgcHeaderComponent {

  constructor(private offcanvasService: NgbOffcanvas,
              private route: Router) { }

  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  goToRoute(route: string) {
    this.route.navigate([route]);
    this.offcanvasService.dismiss();
  }

}
