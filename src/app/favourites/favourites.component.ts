import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  tempList = [
    {name: 'test1', language: 'TypeScript', latestTag: 'v0.0.1'},
    {name: 'test2', language: 'Go', latestTag: 'v0.0.1'},
    {name: 'test3', language: 'C#', latestTag: 'v0.0.1'},
    {name: 'test4', language: 'Ruby', latestTag: 'v0.0.1'},
    {name: 'test5', language: 'Python', latestTag: 'v0.0.1'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
