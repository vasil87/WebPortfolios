/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenthicationService } from './authenthication.service';

describe('Service: Authenthication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenthicationService]
    });
  });

  it('should ...', inject([AuthenthicationService], (service: AuthenthicationService) => {
    expect(service).toBeTruthy();
  }));
});