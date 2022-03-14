import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  clicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  addDetail(){
    this.clicks.push(this.clicks.length + 1);
  }

  getColor(index: any){
    return index >= 4 ? 'pink' :'transparent';
  }

}
