import { EventEmitter, Injectable } from '@angular/core';
import { Repo } from './repo.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favouritesChanged = new EventEmitter<Repo[]>();

  private _favourites: Repo[] = [];
  constructor() {
  }

  get favourites(): Repo[]{
    return this._favourites;
  }

  addToFavourites(repo: Repo) {
    this._favourites.push(repo);
    this.favouritesChanged.emit(this._favourites.slice());
  }

  removeFromFavourites(id: number) {

  }
}
