import { Component } from '@angular/core';
import { ScriptsLoadService } from '@core/services/scripts-load.service';

@Component({
  selector: 'dgc-follow-us',
  templateUrl: './dgc-follow-us.component.html',
  styleUrls: ['./dgc-follow-us.component.scss']
})
export class DgcFollowUsComponent {

  constructor(private scriptLoadService: ScriptsLoadService) {
    this.scriptLoadService.load(['reveal']);
  }

}
