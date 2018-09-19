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
  repos: Repo[] = [];

  private searchSubscription: Subscription;

  constructor(private favouritesService: FavouritesService,
              private searchService: SearchService) {
  }

  isFavourited(repo: Repo): boolean {
    return this.favouritesService.favourites.includes(repo);
  }

  ngOnInit() {
    this.searchSubscription = this.searchService.searchEvent.subscribe(
      value => this.repos = value
    );
  }

  onAddToFavourites(repo: Repo) {
    this.favouritesService.addFavourite(repo);
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
