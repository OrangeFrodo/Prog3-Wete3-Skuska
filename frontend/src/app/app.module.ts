import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AddCdFormComponent} from './add-cd-form/add-cd-form.component';
import {CdGridComponent} from './grid/cd-grid.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CdListPageComponent } from './cd-list-page/cd-list-page.component';
import { GenreListPageComponent } from './genre-list-page/genre-list-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { AddGenreFormComponent } from './add-genre-form/add-genre-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCdFormComponent,
    CdGridComponent,
    CdListPageComponent,
    GenreListPageComponent,
    AddGenreFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
