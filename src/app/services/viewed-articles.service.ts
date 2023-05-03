import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewedArticlesService {
  private readonly storageKey = 'viewed_articles';

  saveArticle(article: any): void {
    const viewedArticles = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    viewedArticles.push(article);
    localStorage.setItem(this.storageKey, JSON.stringify(viewedArticles));
    console.log('Article saved:', article);
  }

  getViewedArticles(): any[] {
    const articles = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    console.log('Loaded articles:', articles);
    return articles;
  }

}
