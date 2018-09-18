import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repo } from './repo.model';

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
  //result$: Observable<Repo[]> = null;
  result: Subscription;

  constructor(private apollo: Apollo) {
  }

  private _repoList: Repo[] = [
    { id: '1', name: 'test1', primaryLanguage: 'Java', latestTag: 'v0.0.1' },
    { id: '2', name: 'test2', primaryLanguage: 'Java', latestTag: 'v0.0.1' },
    { id: '3', name: 'test3', primaryLanguage: 'Java', latestTag: 'v0.0.1' },
    { id: '4', name: 'test4', primaryLanguage: 'Java', latestTag: 'v0.0.1' },
    { id: '5', name: 'test5', primaryLanguage: 'Java', latestTag: 'v0.0.1' }
  ];

  get repoList(): Repo[] {
    return this._repoList.slice();
  }

  search(searchVal: string) {
    console.log('searching');
    this.result = this.apollo.query<any>({
      query: GitHubQuery
    }).pipe(
      map(result => {
        result.data.search.edges
          .forEach((value) => {
            const id = value.node.id;
            const name = value.node.name;
            const primaryLanguage = value.node.primaryLanguage === null
              ? ''
              : value.node.primaryLanguage.name;
            const tag = value.node.releases.edges.length === 0
              ? ''
              : value.node.releases.edges[ 0 ].node.tag.name;
            this._repoList.push({ id: id, name: name, primaryLanguage: primaryLanguage, latestTag: tag });
          });
        return this._repoList.slice();
      })
    ).subscribe(
      (data) => {
        console.log(data);
        this._repoList = data;
      }
    );
  }
}
