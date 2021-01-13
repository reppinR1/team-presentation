import { TeamMemberCardGridComponent } from './team-member-card-grid.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('TeamMemberCardGridComponent', () => {
  let spectator: Spectator<TeamMemberCardGridComponent>;
  const createComponent = createComponentFactory({
    component: TeamMemberCardGridComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: { memberCards: [] as any },
    });
  });

  it('should should match snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
