import { Component, OnInit } from '@angular/core';
import { ReadArticlesJsonService } from '../../core/services/read-articles-json.service';
import { Article } from '../../core/models/articles';
import { isAfter } from "date-fns";
import { ArticlesManager } from '../../core/managers/articles.manager';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articlesShowOnHome: Article[];
  articles: Article[];

  constructor(private readArticlesJson: ReadArticlesJsonService) { }
  ngOnInit(): void {
    this.readArticlesJson.getArticles().subscribe(res => {
      this.articles = res.articles;
      this.articlesShowOnHome = this.articles.filter(a => a.showOnHomepage);
      this.articlesShowOnHome = this.articlesShowOnHome.sort((a, b) => {
        if (isAfter(new Date(b.publishedAt), new Date(a.publishedAt))) {
          return 1;
        } else {
          return -1;
        }
      });
    });
  }

}
