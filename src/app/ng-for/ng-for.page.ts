import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.page.html',
  styleUrls: ['./ng-for.page.scss'],
})
export class NgForPage implements OnInit {
  marvelList: any[] = [];

  constructor() {
    this.marvelList = [
      {
        name: 'Iron Man',
        color: 'red'
      },
      {
        name: 'Capitan America',
        color: 'blue'
      },
      {
        name: 'Hulk',
        color: 'green'
      }
    ];
  }

  ngOnInit() {
  }

}
