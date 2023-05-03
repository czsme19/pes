import { Component, OnInit } from '@angular/core';
import { ArticlesEntity } from '../interfaces/news-response';
import { ViewedArticlesService } from '../services/viewed-articles.service';

@Component({
  selector: 'app-viewed-articles',
  templateUrl: './viewed-articles.component.html',
  styleUrls: ['./viewed-articles.component.scss'],
})

export class ViewedArticlesComponent implements OnInit {
  viewedArticles: ArticlesEntity[] = [];

  constructor(private viewedArticlesService: ViewedArticlesService) {}

  async ngOnInit() {
    const localArticles = localStorage.getItem('viewed_articles');
    console.log(localArticles);
    this.viewedArticles = this.viewedArticlesService.getViewedArticles();
    console.log('Viewed articles:', this.viewedArticles);
    console.log('Number of viewed articles:', this.viewedArticles.length); // Přidejte tento řádek
  }
}
