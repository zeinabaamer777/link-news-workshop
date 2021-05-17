import { Component, OnInit } from '@angular/core';
import { ReadArticlesJsonService } from '../../core/services/read-articles-json.service';
import { Article } from '../../core/models/articles';
import { isAfter } from "date-fns";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articlesShowOnHome: Article[];

  constructor(private readArticlesJson: ReadArticlesJsonService) { }
  ngOnInit(): void {
    this.getArticels()
  }

  getArticels() {
    this.readArticlesJson.getArticles().subscribe((res) => {
      this.articlesShowOnHome = res.articles.filter((A) => A.showOnHomepage);
      console.log(this.articlesShowOnHome)
      this.articlesShowOnHome = this.articlesShowOnHome.sort((a, b) => {
        if (isAfter(new Date(b.publishedAt), new Date(a.publishedAt))) {
          return 1;
        } else {
          return -1;
        }
      });
      console.log(this.articlesShowOnHome)
    });

  }

}
