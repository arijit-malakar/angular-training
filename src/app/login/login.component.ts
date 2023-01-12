import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { MainService } from '../main.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  toggle: boolean = true;
  @Input() counter: any;

  constructor(_service: MainService, private loginService: LoginService) {
    //let course = new MainService();
    console.log('course: ', _service.getCourses());
    console.log('city: ', this.loginService.setLoginDetails().city);
    console.log('inside constructor');
  }

  // Will be called first before ngOnInit, ngDoCheck
  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside ngOnChanges', this.counter);
  }

  ngOnInit(): void {
    console.log('inside ngOnInit');
  }

  ngDoCheck(): void {
    console.log('inside ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('inside ngOnDestroy');
  }

  callToggle() {
    this.toggle = this.toggle ? false : true;
  }
}
