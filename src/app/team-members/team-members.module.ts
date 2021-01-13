import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMembersComponent } from './team-members.component';
import { TeamMemberCardComponent } from './team-member-card/team-member-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamMemberCardGridComponent } from './team-member-card-grid/team-member-card-grid.component';
import { CardModule } from '../shared/card/card.module';

@NgModule({
  declarations: [
    TeamMembersComponent,
    TeamMemberCardComponent,
    TeamMemberCardGridComponent,
  ],
  imports: [CommonModule, HttpClientModule, CardModule],
  exports: [TeamMembersComponent],
})
export class TeamMembersModule {}
