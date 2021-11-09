import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class aboutComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    window.scroll(0,0);
  }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
}

}
