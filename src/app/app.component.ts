import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

@Component({
  selector: 'app-viewed',
  templateUrl: 'viewed-articles/viewed-articles.component.html',
  styleUrls: ['viewed-articles/viewed-articles.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'General', url: '/general', icon: 'newspaper' },
    { title: 'Business', url: '/business', icon: 'business' },
    { title: 'Sports', url: '/sports', icon: 'basketball' },
    { title: 'Entertainment', url: '/entertainment', icon: 'videocam' },
    { title: 'Technology', url: '/technology', icon: 'laptop' },
    { title: 'Health', url: '/health', icon: 'medkit' },
    { title: 'Science', url: '/science', icon: 'rocket' },
    { title: 'Histories',url:'/viewed-articles', icon: 'eye'},
  ];
  constructor() {}
}
