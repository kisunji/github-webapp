import { Component, OnDestroy, OnInit } from '@angular/core';
import { FavouritesService } from '../../shared/favourites.service';
import { Repo } from '../../shared/repo.model';
import { SearchService } from '../../shared/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: [ './search-list.component.css' ]
})
export class SearchListComponent implements OnInit, OnDestroy {
  tempList: Repo[] = [];

  private searchSubscription: Subscription;

  constructor(private favouritesService: FavouritesService,
              private searchService: SearchService) {
  }

  ngOnInit() {
    this.tempList = this.searchService.repoList;
    this.searchSubscription = this.searchService.result;
  }

  onAddToFavourites(repo: Repo) {
    this.favouritesService.addToFavourites(repo);
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
