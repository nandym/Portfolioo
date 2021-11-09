import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-unrealdemo',
  templateUrl: './unrealdemo.component.html',
  styleUrls: ['./unrealdemo.component.css']
})
export class unrealdemoComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    window.scroll(0,0);
  }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
}

}
