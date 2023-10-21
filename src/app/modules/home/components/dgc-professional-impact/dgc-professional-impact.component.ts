import { Component } from '@angular/core';
import { ScriptsLoadService } from '@core/services/scripts-load.service';

@Component({
  selector: 'dgc-professional-impact',
  templateUrl: './dgc-professional-impact.component.html',
  styleUrls: ['./dgc-professional-impact.component.scss']
})
export class DgcProfessionalImpactComponent {

  constructor(private scriptLoadService: ScriptsLoadService) {
    this.scriptLoadService.load(['reveal']);
  }

}
