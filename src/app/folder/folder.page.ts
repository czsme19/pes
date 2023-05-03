import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ArticlesEntity } from '../interfaces/news-response';
import { NewsapiService } from '../services/newsapi.service';
import { ViewedArticlesService } from '../services/viewed-articles.service'; // Přidejte import

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  newsList: ArticlesEntity[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsApiService: NewsapiService,
    private viewedArticlesService: ViewedArticlesService // Přidejte ViewedArticlesService do konstruktoru
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTopHeadlines();
  }

  getTopHeadlines() {
    this.newsApiService
      .getTopCountryHeadlines('in', this.folder)
      .pipe(map((res) => res.articles))
      .subscribe((news) => (this.newsList = news));
  }

  // Přidejte metodu onArticleViewed
  onArticleViewed(article: ArticlesEntity) {
    this.viewedArticlesService.saveArticle(article);
  }
}

