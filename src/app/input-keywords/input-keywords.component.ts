import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';

import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-input-keywords',
  templateUrl: './input-keywords.component.html',
  styleUrls: ['./input-keywords.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputKeywordsComponent implements OnInit {

  @ViewChild('tooltip') tooltip: MatTooltip;
  control = new FormControl();
  filteredWords: Observable<string[]>;
  words: string[];
  autoComplateStart = false;
  filterLengthSub: Subscription;
  noWords = false;
  @Input() phase?: string;
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get("assets/words.json").subscribe((val: any) => {
      this.words = val.commonWords;
    });
    this.filteredWords = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  ngOnChanges(): void {
    this.control.setValue(this.phase);
  }
  submit(val?: string) {
    if (val) {
      this.router.navigateByUrl('c/' + val);
    } else {
      this.router.navigateByUrl('c/' + this.control.value);
    }
  }
  private _filter(value: string): string[] {
    if (value.length > 2) {
      const filterValue = this._normalizeValue(value);
      const returnValue = this.words.filter(word => this._normalizeValue(word).includes(filterValue)).slice(0, 5);
      if (returnValue.length === 0) {
        this.noWords = true;
        this.showTooltip();

      } else {
        this.noWords = false;
        this.hideTooltip();
        return returnValue;
      }
    } else {
      if (value.length>0) {
        this.noWords = false;
        this.hideTooltip();
      }
    }
  }
  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  showTooltip() {
    this.tooltip.show();
  }
  hideTooltip() {
    this.tooltip.hide();
  }

}
