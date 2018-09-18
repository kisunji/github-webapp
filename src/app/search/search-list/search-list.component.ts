import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../../shared/favourites.service';
import { Repo } from '../../shared/repo.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  tempList: Repo[] = [
    {id: '1', name: 'test1', primaryLanguage: 'Java', latestTag: 'v0.0.1'},
    {id: '2', name: 'test2', primaryLanguage: 'Java', latestTag: 'v0.0.1'},
    {id: '3', name: 'test3', primaryLanguage: 'Java', latestTag: 'v0.0.1'},
    {id: '4', name: 'test4', primaryLanguage: 'Java', latestTag: 'v0.0.1'},
    {id: '5', name: 'test5', primaryLanguage: 'Java', latestTag: 'v0.0.1'}
  ];

  constructor(private favouritesService: FavouritesService) { }

  ngOnInit() {
  }

  onAddToFavourites(repo: Repo) {
    this.favouritesService.addToFavourites(repo);
  }

}
