import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  tempList = [
    {name: 'test1', language: 'Java', latestTag: 'v0.0.1'},
    {name: 'test2', language: 'Java', latestTag: 'v0.0.1'},
    {name: 'test3', language: 'Java', latestTag: 'v0.0.1'},
    {name: 'test4', language: 'Java', latestTag: 'v0.0.1'},
    {name: 'test5', language: 'Java', latestTag: 'v0.0.1'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
