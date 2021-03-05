
import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnChanges {
  @Input() tags: string[];
  xPosition = 0;
  transformNumber = 145;
  totalBarWidth: number;
  windowWidth: number;
  barAtLeft = false;
  barAtRight = true;
  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges() {
    console.log(this.tags.length * 145)
    console.log(document.getElementById('bar').offsetWidth)

    this.windowWidth = document.getElementById('bar').offsetWidth;
    this.totalBarWidth = this.tags.length * 145;
    console.log(Math.ceil((this.totalBarWidth-this.windowWidth) /145))
  }

  tagsBarToRight() {
    const bar = document.getElementById('bar');

    bar.style.transform = 'translateX(' + (this.xPosition + this.transformNumber) + 'px)';
    this.xPosition += this.transformNumber;
    if (this.xPosition >= 0) {
      this.barAtLeft = false;
    }
    console.log(this.xPosition)
  }
  tagsBarToLeft() {
    const bar = document.getElementById('bar');

    bar.style.transform = 'translateX(' + (this.xPosition - this.transformNumber) + 'px)';
    this.xPosition -= this.transformNumber;
    if (this.xPosition <= 0) {
      this.barAtLeft = true;
    }
    console.log(this.xPosition)
  }
}
