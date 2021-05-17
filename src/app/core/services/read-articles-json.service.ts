import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsModel } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class ReadArticlesJsonService {

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<any> {
    return this.http.get('../../../assets/json-files/newsapi.json').pipe();
  }
}
