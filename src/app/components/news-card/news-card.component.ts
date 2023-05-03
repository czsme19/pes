import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticlesEntity } from '../../interfaces/news-response';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() news: ArticlesEntity;
  @Output() articleClicked = new EventEmitter<ArticlesEntity>();

  constructor() {}

  ngOnInit() {console.log(`newsCard`);}

  onArticleClick() {
    this.articleClicked.emit(this.news);
    window.open(this.news.url, '_blank', 'noopener noreferrer');
  }
}
