import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details-child',
  templateUrl: './personal-details-child.component.html',
  styleUrls: ['./personal-details-child.component.css']
})
export class PersonalDetailsChildComponent implements OnInit {

  @Input('data') data: any;

  @Output() sendData = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  handleRequest=(info:any)=>{
    this.sendData.emit(info)
  }

  userForm = new FormGroup({
    criteria: new FormControl('name')
  }); 
  
  onRadioChanged=(form:FormGroup)=>{
    this.handleRequest(form.value.criteria)
    // this.sort(form.value.criteria)
    // child to parent
  }

  

}
