import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MemberCards } from './team-member.model';
import { TeamMembersService } from './team-members.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamMembersComponent {
  readonly memberCards$: Observable<MemberCards> = this.teamMembersService.getTeamMembers();

  constructor(private readonly teamMembersService: TeamMembersService) {}
}
