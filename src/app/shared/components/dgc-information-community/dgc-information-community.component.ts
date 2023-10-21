import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptsLoadService } from '@core/services/scripts-load.service';

@Component({
  selector: 'dgc-information-community',
  templateUrl: './dgc-information-community.component.html',
  styleUrls: ['./dgc-information-community.component.scss']
})
export class DgcInformationCommunityComponent {

  button = false;

  constructor(public router: Router,
              private scriptLoadService: ScriptsLoadService) {
    this.scriptLoadService.load(['reveal']);
    if(this.router.url === '/') {
      this.button = false;
    } else {
      this.button = true;
    }

  }


}
