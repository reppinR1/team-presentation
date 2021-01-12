import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamMember, TeamMembers } from './model';
import { TeamMembersService } from './team-members.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent {
  teamMembers: Observable<any>;

  constructor(private teamMembersService: TeamMembersService) {}

  ngOnInit() {
    this.getTeamMembers();
    this.teamMembers.subscribe((x) => console.log(x));
  }

  private getTeamMembers(): void {
    this.teamMembers = this.teamMembersService.getTeamMembers();
  }
}
