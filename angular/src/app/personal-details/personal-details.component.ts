import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import details from '../../assets/data'
import {Form} from '@angular/forms'
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor() { 

  }
  data = details;

  ngOnInit(): void {
  }

  getSortOrder=(prop:string)=> {    
    return function(a:any, b:any) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
  }  

  receivedMessage=($event:string)=>{
    this.sort($event)
    // console.log($event)
  }

  sort=(flag:string)=>{
    this.data.sort(this.getSortOrder(flag))
  }

}
