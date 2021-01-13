import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MemberCard } from '../team-member.model';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamMemberCardComponent {
  @Input() memberCard: MemberCard;
}
