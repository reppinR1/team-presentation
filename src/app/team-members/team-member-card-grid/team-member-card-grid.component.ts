import { Component, Input } from '@angular/core';
import { MemberCards } from '../model';

@Component({
  selector: 'app-team-member-card-grid',
  templateUrl: './team-member-card-grid.component.html',
  styleUrls: ['./team-member-card-grid.component.scss'],
})
export class TeamMemberCardGridComponent {
  @Input() memberCards: MemberCards | null;
}
