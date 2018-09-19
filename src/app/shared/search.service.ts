import { EventEmitter, Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Repo } from './repo.model';

const GitHubQuery = gql`
query GitHubQuery($searchString: String!) {
  search(query: $searchString, type: REPOSITORY, first: 10)  {
    edges {
      node {
        ... on Repository {
          id
          nameWithOwner
          primaryLanguage {
            name
          }
          url
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
  searchEvent = new EventEmitter<Repo[]>();

  constructor(private apollo: Apollo) {
  }

  search(searchVal: string) {
    const tempList: Repo[] = [];

    return this.apollo.query<any>({
      query: GitHubQuery,
      variables: {
        searchString: searchVal
      }
    }).pipe(
      map(result => {
        result.data.search.edges.forEach((value) => {
          const id = value.node.id;
          const name = value.node.nameWithOwner;
          const url = value.node.url;
          const primaryLanguage = value.node.primaryLanguage === null
            ? ''
            : value.node.primaryLanguage.name;
          const tag = value.node.releases.edges.length === 0
            ? ''
            : value.node.releases.edges[ 0 ].node.tag.name;
          tempList.push({ id: id, name: name, url: url, primaryLanguage: primaryLanguage, latestTag: tag });
        });
        return tempList.slice();
      })
    );
  }
}
