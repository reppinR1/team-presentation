import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ImageUrl } from '../team-member.model';
import { TeamMemberCardComponent } from './team-member-card.component';

describe('TeamMemberCardComponent', () => {
  let spectator: Spectator<TeamMemberCardComponent>;
  const mocks = {
    memberCard: {
      imageUrl: { w200: 'abc' } as ImageUrl,
      block: {
        title: 'title',
        description: 'desc',
        link: 'link',
        text: 'text',
      },
    },
  };
  const createComponent = createComponentFactory({
    component: TeamMemberCardComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        memberCard: mocks.memberCard,
      },
    });
  });

  it(`should render the image and the team member's description `, () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
