import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-input-keywords',
  templateUrl: './input-keywords.component.html',
  styleUrls: ['./input-keywords.component.scss']
})
export class InputKeywordsComponent implements OnInit {

  control = new FormControl();
  filteredWords: Observable<string[]>;
  words: string[];
  autoComplateStart = false;
  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;
  @Input() phase?: string;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/words.json").subscribe((val: any) => {
      this.words = val.commonWords;
    });
  }
  autoComplate() {
    if (!this.autoComplateStart && this.control.value.length > 2) {
      this.filteredWords = this.control.valueChanges.pipe(
        startWith(this.control.value),
        map(value => this._filter(value)
        )
      );
      this.autoComplateStart = true;
    }
    if (this.control.value.length < 3 && this.autoComplateStart) {
      this.autoComplateStart = false;
    }
  }
  ngOnChanges(): void {
    this.control.setValue(this.phase)
  }
  submit(val?: string) {
    if (val) {
      this.router.navigateByUrl('c/' + val);
    } else {
      this.router.navigateByUrl('c/' + this.control.value);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.words.filter(word => this._normalizeValue(word).includes(filterValue)).slice(0, 5);
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
