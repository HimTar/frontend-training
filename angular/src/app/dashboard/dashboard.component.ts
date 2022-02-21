import { Component, OnInit } from '@angular/core';
import {CalculatorComponent} from '../calculator/calculator.component'
@Component({
  selector: 'Dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export default class DashboardComponent implements OnInit {

  constructor() { }
  showCalculator=false
  showJsonResult=false
  showPersonalDetails=true

  ngOnInit(): void {

  }

  onSubmit(flag:string){
    if(flag=="json"){
      this.showJsonResult = !this.showJsonResult
    }else if(flag=="calculator"){
      this.showCalculator = !this.showCalculator
    }else{
      this.showPersonalDetails = !this.showPersonalDetails
    }
  }
}
