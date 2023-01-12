import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
  constructor() {}

  getCourses() {
    return ['c', 'c++', 'java', 'php'];
  }

  setAddress() {
    return {
      city: 'Kolkata',
      state: 'West Bengal',
      country: 'India',
    };
  }
}
