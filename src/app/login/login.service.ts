import { Injectable } from '@angular/core';
import { MainService } from '../main.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _service: MainService) {}

  setLoginDetails() {
    return {
      name: 'John Doe',
      age: 18,
      phone: 123456789,
      city: this._service.setAddress().city,
    };
  }
}
