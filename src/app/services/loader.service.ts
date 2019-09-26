import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Expert} from "./../../modele/expert";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  dataUrl: string = "assets/data/data.json";
  constructor(private http : HttpClient) { }

  /**
   * this method allow to get data from a location
   * The location is provided via url parameter
   * @param url 
   */
  loadExpert(url: string): Observable<Expert[]>{
    return this.http.get<Expert[]>(url);
  }


}
