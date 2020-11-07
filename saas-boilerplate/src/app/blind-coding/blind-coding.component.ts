import { auth } from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { async } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blind-coding',
  templateUrl: './blind-coding.component.html',
  styleUrls: ['./blind-coding.component.css']
})
export class BlindCodingComponent implements OnInit {
  hide=true;
  clientCode1: string;
  
  postId: any;

  counter: { min: number, sec: number }
  breakpoint: number;
  startTimer() {
    this.counter = { min: 45, sec: 0 } // choose whatever you want
    let intervalId = setInterval(() => {
     
      if (this.counter.sec - 1 == -1) {
        this.counter.min -= 1;
        this.counter.sec = 59
      } 
      else this.counter.sec -= 1
      if (this.counter.min === 0 && this.counter.sec == 0) {
        clearInterval(intervalId)
        this.timeTaken= 2700-((this.counter.min* 60)+(this.counter.sec));


        const headers = { 'Authorization': 'Bearer keyptw41XS0xa0zHE', 'Content-Type': 'application/json' };
        const body = { "fields": {
          "Name": this.userName,
          "Code1": this.clientCode1,
          "Time": this.timeTaken
        }};
        this.http.post<any>('https://api.airtable.com/v0/appPMDBDgZDDKoYfT/blind%20coding', body, { headers }).subscribe(data => {
            this.postId = data.id;
        });
        this.router.navigate(['/thankyou']);
      }
    }, 1000)
    
  }
  
  constructor(private http:HttpClient,public auth: AuthService,private router: Router) { }
  timeTaken: any;
   userName:string;
   submitForm(){
    

    this.timeTaken= 2700-((this.counter.min* 60)+(this.counter.sec));


    const headers = { 'Authorization': 'Bearer keyptw41XS0xa0zHE', 'Content-Type': 'application/json' };
    const body = { "fields": {
      "Name": this.userName,
      "Code1": this.clientCode1,
      
      "Time": this.timeTaken
    }};
    this.http.post<any>('https://api.airtable.com/v0/appPMDBDgZDDKoYfT/blind%20coding', body, { headers }).subscribe(data => {
        this.postId = data.id;
    });
    this.router.navigate(['/thankyou']);
  }

  enterClicked1(){
    this.clientCode1=this.clientCode1+" ";
  }
  
   ngOnInit(): void {
    this.counter = { min: 45, sec: 0 };
    this.startTimer();
    this.auth.user$.subscribe(event => this.userName = event.displayName);

  }

  
}
