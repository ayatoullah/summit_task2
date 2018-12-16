import { TestBed, inject } from '@angular/core/testing';

import { RestaurantdbService } from './restaurantdb.service';

describe('RestaurantdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantdbService]
    });
  });

  it('should be created', inject([RestaurantdbService], (service: RestaurantdbService) => {
    expect(service).toBeTruthy();
  }));
});
