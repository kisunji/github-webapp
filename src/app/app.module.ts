import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
