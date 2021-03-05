
import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnChanges {
  @Input() tags: string[];
  xPosition = 0;
  transformNumber = 150;
  totalBarWidth = 0;
  windowWidth = 0;
  offscreenWidth = 0;
  tagItemWidth = 145;
  barAtLeft = false;
  barAtRight = true;
  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges() {
    this.clearTagBar()
  }

  clearTagBar() {
    this.windowWidth = document.getElementById('bar').offsetWidth;
    this.totalBarWidth = this.tags.length * this.tagItemWidth;
    this.offscreenWidth = this.totalBarWidth - this.windowWidth;
    this.xPosition = 0;
    document.getElementById('bar').style.transform = 'translateX(0px)';
    this.barAtLeft = false;
    this.barAtRight = true;
    if (this.xPosition <= -this.offscreenWidth) {
      this.barAtRight = false;
    }
  }

  tagsBarToRight() {
    const bar = document.getElementById('bar');

    bar.style.transform = 'translateX(' + (this.xPosition + this.transformNumber) + 'px)';

    this.xPosition += this.transformNumber;
    if (this.xPosition >= 0) {
      this.barAtLeft = false;
    }
    if (this.xPosition >= -this.offscreenWidth) {
      this.barAtRight = true;
    }
  }
  tagsBarToLeft() {
    const bar = document.getElementById('bar');

    bar.style.transform = 'translateX(' + (this.xPosition - this.transformNumber) + 'px)';
    this.xPosition -= this.transformNumber;
    if (this.xPosition <= 0) {
      this.barAtLeft = true;
    }
    if (this.xPosition <= -this.offscreenWidth) {
      this.barAtRight = false;
    }
  }
}
