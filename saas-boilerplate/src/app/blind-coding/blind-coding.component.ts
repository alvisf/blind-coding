import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blind-coding',
  templateUrl: './blind-coding.component.html',
  styleUrls: ['./blind-coding.component.css']
})
export class BlindCodingComponent implements OnInit {
  hide=true;
  counter: { min: number, sec: number }
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

  
  constructor() { }

  ngOnInit(): void {
    this.counter = { min: 30, sec: 0 };
    this.startTimer();
    
  }
  
}
