import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../core/models/articles';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    // console.log(this.article)
  }

}
