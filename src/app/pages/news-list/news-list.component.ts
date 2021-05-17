import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/core/models/articles";
import { Category } from "src/app/core/models/category";
import { ReadArticlesJsonService } from '../../core/services/read-articles-json.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  public term: string;
  public Articles: Article[];
  public numerPerPage: number = 12;
  public SelectedPage: number = 1;
  public PageinatorStart: number = 0;
  public PageinatorEnd: number = this.numerPerPage;
  public Categories: Category[];
  public selectedCategoryId: any;
  constructor(private readArticlesJson: ReadArticlesJsonService) { }

  ngOnInit() {
    this.getArticles()
  }

  getArticles() {
    this.readArticlesJson.getArticles().subscribe((res) => {
      this.Categories = res.sourceCategory;
      this.Articles = res.articles;
      this.Articles = this.sort({ type: "desc" });
    });
  }

  //#region pagination
  public changePage(page: number) {
    this.SelectedPage = page;
    this.PageinatorEnd = this.numerPerPage * page;
    this.PageinatorStart = this.PageinatorEnd - this.numerPerPage;
  }

  get pagesNumbers(): number[] {
    if (this.Articles && this.Articles.length > this.numerPerPage) {
      let _pages = Math.ceil(this.Articles.length / this.numerPerPage);
      let _pagesArr = [];
      for (let index = 1; index <= _pages; index++) {
        _pagesArr.push(index);
      }
      return _pagesArr;
    }
    return [];
  }

  //#endregion


  //#region sorting
  sort($event): Article[] {
    debugger
    let sorted_articles: Article[];
    if ($event.type == "desc") {
      sorted_articles = this.Articles.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      sorted_articles = this.Articles.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    return sorted_articles;
  }
  //#endregion

  //#region category selection
  selectCategory(param) {
    if (this.selectedCategoryId === 0) {
      this.Articles = this.Articles;
    }
    this.selectedCategoryId = param.target.value;
    this.Articles = this.Articles.filter(el => el.sourceID == this.selectedCategoryId)
  }
  //#endregion
}
