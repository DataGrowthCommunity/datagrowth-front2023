import { Component } from '@angular/core';
import { ScriptsLoadService } from '@core/services/scripts-load.service';

@Component({
  selector: 'dgc-select-study-group',
  templateUrl: './dgc-select-study-group.component.html',
  styleUrls: ['./dgc-select-study-group.component.scss']
})
export class DgcSelectStudyGroupComponent {

  constructor(private scriptLoadService: ScriptsLoadService) {
    this.scriptLoadService.load(['reveal']);
  }
  
}
