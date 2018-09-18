import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repo } from './repo.model';
import { forEach } from 'async';

const GitHubQuery = gql`
  query {
    search(query: "angular", type:REPOSITORY, first:10) {
      edges {
        node {
          ... on Repository {
            id
            name
            primaryLanguage {
              name
            }
            releases(last: 1) {
              edges {
                node {
                  tag {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  repoList: Repo[] = [];

  // private result$: Observable<Repo[]>;
  private result: Subscription;

  constructor(private apollo: Apollo) {
  }

  search(searchVal: string) {
    console.log('searching');
    this.result = this.apollo.query<any>({
      query: GitHubQuery
    }).pipe(
      map((result, index) => {
        const id = result.data.search.edges[ index ].node.id;
        const name = result.data.search.edges[ index ].node.name;
        const primaryLanguage = result.data.search.edges[ index ].node.primaryLanguage.name;
        const tag = result.data.search.edges[ index ].node.releases.edges.length === 0
                    ? ''
                    : result.data.search.edges[ index ].node.releases.edges[ 0 ].node.tag.name;
        this.repoList.push({ id: id, name: name, primaryLanguage: primaryLanguage, latestTag: tag });
        return this.repoList.slice();
      })
    ).subscribe(data => console.log(data));
  }


}
