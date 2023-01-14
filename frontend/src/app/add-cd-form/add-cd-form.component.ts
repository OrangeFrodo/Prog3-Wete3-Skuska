import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../shared/service/data.service";
import {EMPTY, Observable} from "rxjs";
import {GenreModel} from "../shared/types/models";

@Component({
  selector: 'app-add-cd-form',
  templateUrl: './add-cd-form.component.html',
  styleUrls: ['./add-cd-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCdFormComponent implements OnInit{

  formGroup!: FormGroup;

  genres$: Observable<GenreModel[]> = EMPTY;

  constructor(private readonly dataService: DataService) {
    this.initializeForm();
  }

  ngOnInit() {
   this.genres$ = this.dataService.getGenres();
  }

  public addCd(): void {
    if(this.formGroup.valid) {
      this.dataService.addCd(this.formGroup.value).subscribe(value => {
        console.log('ok')
      });
    }
  }

  private initializeForm(): void {
    this.formGroup = new FormGroup<any>({
      autor: new FormControl(null, [Validators.required]),
      nazov: new FormControl(null, [Validators.required]),
      zaner: new FormControl(null, [Validators.required])
    })
  }

}
