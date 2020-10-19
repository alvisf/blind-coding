import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  title = 'Blind-Coding';
  clicked = false;
  constructor(public auth: AuthService) { }
  actionMethod(){
    this.clicked = true;
  }

  ngOnInit(): void {
  }

}
