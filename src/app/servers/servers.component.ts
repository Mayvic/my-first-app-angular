import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-service]'
  //html will see the selector like an attribute so it's necessary to do <div app-server><div>  
  
  //selector: '.app-server'
  //html will see the selector like a class so it's necessary to do <div class='app-server'><div>  

  templateUrl: './servers.component.html',

  //template: '<p> hello world </p>'
  //it's possible to put html code here if for short

  styleUrls: ['./servers.component.css']

  //style: ['h3 { color: pink }]'
  //it's possible to put css code here if for short
  // it's an array because it's possible get style from more than one file
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
