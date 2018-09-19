import { Component, EventEmitter, OnInit } from '@angular/core';
import {SearchService} from '../../shared/search.service';
import { Repo } from '../../shared/repo.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  searchVal = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSearch() {
    this.searchService.search(this.searchVal).subscribe(
      value => this.searchService.searchEvent.emit(value)
    );
  }

}
