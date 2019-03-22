import { TestBed, inject } from '@angular/core/testing';

import { EventQueueService } from './event-queue.service';

describe('EventQueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventQueueService]
    });
  });

  it('should be created', inject([EventQueueService], (service: EventQueueService) => {
    expect(service).toBeTruthy();
  }));
});
