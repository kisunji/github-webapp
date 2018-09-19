import { EventEmitter, Injectable } from '@angular/core';
import { Repo } from './repo.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favouritesChanged = new EventEmitter<Repo[]>();

  constructor() {
  }

  private _favourites: Repo[] = [];

  get favourites(): Repo[] {
    return this._favourites.slice();
  }

  addFavourite(repo: Repo) {
    this._favourites.push(repo);
    this.favouritesChanged.emit(this._favourites.slice());
  }

  removeFavourite(id: string) {
    this._favourites = this._favourites.filter(repo => repo.id !== id);
    this.favouritesChanged.emit(this._favourites.slice());
  }
}
