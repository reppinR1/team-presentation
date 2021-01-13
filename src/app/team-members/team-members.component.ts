import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberCards } from './model';
import { TeamMembersService } from './team-members.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent {
  memberCards$: Observable<MemberCards>;

  constructor(private teamMembersService: TeamMembersService) {}

  ngOnInit() {
    this.getTeamMembers();
  }

  private getTeamMembers(): void {
    this.memberCards$ = this.teamMembersService.getTeamMembers();
  }
}
