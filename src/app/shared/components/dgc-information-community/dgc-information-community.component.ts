import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dgc-information-community',
  templateUrl: './dgc-information-community.component.html',
  styleUrls: ['./dgc-information-community.component.scss']
})
export class DgcInformationCommunityComponent {

  button = false;

  constructor(public router: Router) {
    if(this.router.url === '/') {
      this.button = false;
    } else {
      this.button = true;
    }

  }


}
