import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CdModel} from "../shared/types/models";

@Component({
  selector: 'app-cd-grid',
  templateUrl: './cd-grid.component.html',
  styleUrls: ['./cd-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdGridComponent {

  @Input()
  data: CdModel[] = [];


}
