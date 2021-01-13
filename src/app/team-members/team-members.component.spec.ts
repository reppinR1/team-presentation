import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { TeamMembersComponent } from './team-members.component';
import { TeamMembersService } from './team-members.service';
import { MockComponent } from 'ng-mocks';
import { TeamMemberCardGridComponent } from './team-member-card-grid/team-member-card-grid.component';
import { of } from 'rxjs';

describe('TeamMembersComponent', () => {
  let spectator: Spectator<TeamMembersComponent>;
  const mocks = {
    teamMembers: {},
  };
  const createComponent = createComponentFactory({
    component: TeamMembersComponent,
    shallow: true,
    declarations: [MockComponent(TeamMemberCardGridComponent)],
    providers: [
      {
        provide: TeamMembersService,
        useValue: {
          getTeamMembers: jest.fn(() => of(mocks.teamMembers)),
        },
      },
    ],
  });
  const selectors = {
    cardGridComponent: () => spectator.query(TeamMemberCardGridComponent),
  };

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should render title and team member cards grid', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
  it('should set <app-team-members-grid> [memberCards] to memberCards$', () => {
    expect(selectors.cardGridComponent().memberCards).toEqual(
      mocks.teamMembers
    );
  });
});
