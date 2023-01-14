import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../shared/service/data.service";

@Component({
  selector: 'app-add-genre-form',
  templateUrl: './add-genre-form.component.html',
  styleUrls: ['./add-genre-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGenreFormComponent {

  formGroup!: FormGroup;

  constructor(private readonly dataService: DataService) {
    this.initializeForm();
  }

  public addGenre(): void {
    if(this.formGroup.valid) {
      this.dataService.addGenre(this.formGroup.value).then(() => {
        this.formGroup.reset()
      })
    }
  }

  private initializeForm(): void {
    this.formGroup = new FormGroup<any>({
      nazov: new FormControl(null, [Validators.required]),
    })
  }

}
