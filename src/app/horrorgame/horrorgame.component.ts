import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-horrorgame',
  templateUrl: './horrorgame.component.html',
  styleUrls: ['./horrorgame.component.css']
})
export class horrorgameComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    window.scroll(0,0);
  }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
}

}
