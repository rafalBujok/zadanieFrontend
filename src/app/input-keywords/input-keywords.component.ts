import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-input-keywords',
  templateUrl: './input-keywords.component.html',
  styleUrls: ['./input-keywords.component.scss']
})
export class InputKeywordsComponent implements OnInit {
  searchPhase: string;
  constructor() { }

  ngOnInit(): void {

  }

}
