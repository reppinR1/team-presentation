import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { MemberCards, TeamMembersResponse } from './model';

@Injectable({
  providedIn: 'root',
})
export class TeamMembersService {
  private teamMembersUrl =
    'https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json';

  constructor(private httpClient: HttpClient) {}

  public getTeamMembers(): Observable<MemberCards> {
    return this.httpClient.get<TeamMembersResponse>(this.teamMembersUrl).pipe(
      map((response) => response.data[0]),
      map((data) => data.attributes.memberCards),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
