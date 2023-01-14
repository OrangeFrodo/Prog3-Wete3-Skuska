import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {CdListPageComponent} from "./cd-list-page/cd-list-page.component";
import {GenreListPageComponent} from "./genre-list-page/genre-list-page.component";

const routes: Route[] = [{
  path: '',
  component: CdListPageComponent,
},
  {
    path: 'zanre',
    component: GenreListPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
