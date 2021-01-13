import { Component, Input, OnInit } from '@angular/core';
import { MemberCard } from '../model';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss'],
})
export class TeamMemberCardComponent implements OnInit {
  @Input() memberCard: MemberCard;
  constructor() {}

  ngOnInit(): void {}
}
