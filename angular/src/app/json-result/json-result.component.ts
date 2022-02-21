import { Component, OnInit } from '@angular/core';
import { NetworkRequestService } from '../network-request.service';

@Component({
  selector: 'app-json-result',
  templateUrl: './json-result.component.html',
  styleUrls: ['./json-result.component.css'],
})
export class JsonResultComponent implements OnInit {
  data: any;
  constructor(private request: NetworkRequestService) {}

  ngOnInit(): void {
    this.request
      .getRequest('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.data = data;
      });
  }
}
