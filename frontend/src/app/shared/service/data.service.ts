import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CdModel, GenreModel} from "../types/models";
import {lastValueFrom, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly apiUrl: string = "http://localhost:8080"
  constructor(private http: HttpClient) {
  }

  public addCd(dto: CdModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/add-cd`, dto);
  }

  public addGenre(dto: GenreModel): Promise<number> {
    console.log(dto)
    return lastValueFrom(this.http.post<number>(`${this.apiUrl}/api/add-zaner`, dto));
  }

  public getGenres(): Observable<GenreModel[]> {
    return this.http.get<GenreModel[]>(`${this.apiUrl}/api/get-zanre`)
  }
}
