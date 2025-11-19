import { TestBed } from '@angular/core/testing';

import { WsNewsService } from './ws-news.service';

describe('WsNewsService', () => {
  let service: WsNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
