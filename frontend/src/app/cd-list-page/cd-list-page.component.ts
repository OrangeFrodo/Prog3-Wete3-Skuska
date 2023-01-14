import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cd-list-page',
  templateUrl: './cd-list-page.component.html',
  styleUrls: ['./cd-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdListPageComponent {

}
