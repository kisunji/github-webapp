import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../../shared/favourites.service';
import { Repo } from '../../shared/repo.model';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css']
})
export class FavouritesListComponent implements OnInit {
  favourites = [];

  constructor(private favouritesService: FavouritesService) { }

  ngOnInit() {
    this.favourites = this.favouritesService.favourites;
    this.favouritesService.favouritesChanged.subscribe(
      (repos: Repo[]) => {
        this.favourites = repos;
      }
    );
  }

  onRemoveFavourite(id: string) {
    this.favouritesService.removeFromFavourites(id);
  }
}
