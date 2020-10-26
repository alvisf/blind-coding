import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-final-round',
  templateUrl: './final-round.component.html',
  styleUrls: ['./final-round.component.css']
})
export class FinalRoundComponent implements OnInit {
  hide=true;
  clientCode1: string;
  clientCode2: string;
  clientCode3: string;
  clientCode4: string;
  clientCode5: string;
  postId: any;

  counter: { min: number, sec: number }
  breakpoint: number;
  startTimer() {
    this.counter = { min: 30, sec: 0 } // choose whatever you want
    let intervalId = setInterval(() => {
      if (this.counter.sec - 1 == -1) {
        this.counter.min -= 1;
        this.counter.sec = 59
      } 
      else this.counter.sec -= 1
      if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId)
    }, 1000)
    
  }
  
  constructor(private http:HttpClient,public auth: AuthService,private router: Router) { }
  timeTaken: any;
   userName:string;
   submitForm(){
    

    this.timeTaken= 1800-((this.counter.min* 60)+(this.counter.sec));


    const headers = { 'Authorization': 'Bearer keyptw41XS0xa0zHE', 'Content-Type': 'application/json' };
    const body = { "fields": {
      "Name": this.userName,
      "Code1": this.clientCode1,
      "Code2": this.clientCode2,
      "Code3": this.clientCode3,
      "Code4": this.clientCode4,
      "Code5": this.clientCode5,
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
  enterClicked2(){
    this.clientCode2=this.clientCode2+" ";
  }
  enterClicked3(){
    this.clientCode3=this.clientCode3+" ";
  }
  enterClicked4(){
    this.clientCode4=this.clientCode4+" ";
  }
  enterClicked5(){
    this.clientCode5=this.clientCode5+" ";
  }
   ngOnInit(): void {
    this.counter = { min: 30, sec: 0 };
    this.startTimer();
    this.auth.user$.subscribe(event => this.userName = event.displayName);

  }
}
