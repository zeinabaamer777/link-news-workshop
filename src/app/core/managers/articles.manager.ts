import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReadArticlesJsonService } from '../services/read-articles-json.service';
import { NewsModel } from '../models/news';


@Injectable({
  providedIn: 'root',
})

export class ArticlesManager {

  public articles$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private readArticlesJson: ReadArticlesJsonService) { }

  getArticles() {
    this.readArticlesJson.getArticles().subscribe(((res: NewsModel[]) => {
      this.articles$.next(res);
    }));
  }

}
