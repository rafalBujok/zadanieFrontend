import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-input-keywords',
  templateUrl: './input-keywords.component.html',
  styleUrls: ['./input-keywords.component.scss']
})
export class InputKeywordsComponent implements OnInit {
  searchPhase: string;
  @Input() phase?: string;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  ngOnChanges() {
    this.searchPhase = this.phase;
  }
  submit() {
    this.router.navigateByUrl('c/' + this.searchPhase);
  }
}
