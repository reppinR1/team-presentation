import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MemberCards } from '../team-member.model';

@Component({
  selector: 'app-team-member-card-grid',
  templateUrl: './team-member-card-grid.component.html',
  styleUrls: ['./team-member-card-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamMemberCardGridComponent {
  @Input() memberCards: MemberCards | null;
}
