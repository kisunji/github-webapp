import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import {SearchService} from '../../shared/search.service';
import { Repo } from '../../shared/repo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  searchVal = '';
  private searchSubscription: Subscription;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSearch() {
    this.searchSubscription = this.searchService.search(this.searchVal).subscribe(
      value => this.searchService.searchEvent.emit(value)
    );
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

}
