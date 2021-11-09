import { Component, OnInit } from '@angular/core';

import { works } from '../works';


@Component({
  selector: 'app-work-boxes',
  templateUrl: './work-boxes.component.html',
  styleUrls: ['./work-boxes.component.css']
})
export class WorkBoxesComponent implements OnInit {
  works = works;

 goto(): void {





 }



  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
