import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/core/models/articles';
import { ArticlesManager } from '../../core/managers/articles.manager';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  article: Article;
  articles: Article[];

  constructor(private activatedRoute: ActivatedRoute,
    private articlesManager: ArticlesManager) { }

  ngOnInit(): void {
    this.articlesManager.articles$.subscribe(res => {
      this.articles = res.articles;
    });
    this.articlesManager.getArticles();

    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id !== undefined) {
        const index = this.articles.findIndex(article => +article['id'] === +params.id);
        this.article = this.articles[index];
        window.scrollTo(0, 0)
      }
    });

  }

}
