import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Apollo } from 'apollo-angular';
import { ApolloBoost, ApolloBoostModule } from 'apollo-angular-boost';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchBoxComponent } from './search/search-box/search-box.component';
import { SearchListComponent } from './search/search-list/search-list.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavouritesListComponent } from './favourites/favourites-list/favourites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchBoxComponent,
    SearchListComponent,
    FavouritesComponent,
    FavouritesListComponent,
  ],
  imports: [
    BrowserModule,
    ApolloBoostModule,
    HttpClientModule
  ],
  providers: [ Apollo ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(boost: ApolloBoost) {
    boost.create({
      uri: 'https://api.github.com/graphql',
      httpOptions: {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ddecf0c27220eb770a3cdb23bed7f576b4fc3645'
        })
      }

    });
  }
}
