import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MemberCards, TeamMembersResponse } from './team-member.model';

@Injectable({
  providedIn: 'root',
})
export class TeamMembersService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) {}

  public getTeamMembers(): Observable<MemberCards> {
    return this.httpClient
      .get<TeamMembersResponse>(`${this.apiUrl}/task/index.json`)
      .pipe(
        map((response) => response.data[0]),
        map((data) => data.attributes.memberCards)
      );
  }
}
