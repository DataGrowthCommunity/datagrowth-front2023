import { Component } from '@angular/core';
import { ScriptsLoadService } from '@core/services/scripts-load.service';

@Component({
  selector: 'dgc-business-alliances',
  templateUrl: './dgc-business-alliances.component.html',
  styleUrls: ['./dgc-business-alliances.component.scss']
})
export class DgcBusinessAlliancesComponent {

  constructor(private scriptLoadService: ScriptsLoadService) {
    this.scriptLoadService.load(['reveal']);
  }
  
}
