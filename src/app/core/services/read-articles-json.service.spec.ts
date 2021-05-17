import { TestBed } from '@angular/core/testing';

import { ReadArticlesJsonService } from './read-articles-json.service';

describe('ReadArticlesJsonService', () => {
  let service: ReadArticlesJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadArticlesJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
