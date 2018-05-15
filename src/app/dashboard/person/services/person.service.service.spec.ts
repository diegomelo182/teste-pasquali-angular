import { TestBed, inject } from '@angular/core/testing';

import { Person.ServiceService } from './person.service.service';

describe('Person.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Person.ServiceService]
    });
  });

  it('should be created', inject([Person.ServiceService], (service: Person.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
