import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  trending: string[] = ['flower', 'wallpapers', 'backgrounds', 'happy', 'love']
  ngOnInit(): void {

  }

}
