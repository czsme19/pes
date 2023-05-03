import { TestBed } from '@angular/core/testing';

import { ViewedArticlesService } from './viewed-articles.service';

describe('ViewedArticlesService', () => {
  let service: ViewedArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewedArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
