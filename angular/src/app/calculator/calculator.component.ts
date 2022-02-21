import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  currencies = [
    'China',
    'Japan',
    'United Arab Emirates',
    'The United States',
    'Sri lanka',
    'New Zealand',
  ];
  values = [0.084, 1.54, 0.049, 0.013, 2.7, 0.02];
  abbr = [
    'Chinese Yuan',
    'Yen',
    'Dinar',
    'Dollar',
    'Sri Lankan Rupee',
    'NZ Dollar',
  ];

  curr1: string = '';
  curr2: string = '';
  val1: number = 0;
  val2: number = 0;
  ngOnInit(): void {
    this.curr1 = this.abbr[0];
    this.curr2 = this.abbr[1];
  }

  reset() {
    this.val2 = 0;
    this.val1 = 0;
  }

  valuechange() {
    if (this.val1 < 0) {
      alert('Negative Value Not Allowed');
    }
    this.val2 = this.values[this.abbr.indexOf(this.curr2)] * this.val1;
  }
}
