import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMembersComponent } from './team-members.component';
import { TeamMemberCardComponent } from './team-member-card/team-member-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TeamMembersComponent, TeamMemberCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [TeamMembersComponent],
})
export class TeamMembersModule {}
