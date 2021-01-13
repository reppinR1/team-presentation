import { TeamMemberCardGridComponent } from './team-member-card-grid.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MemberCards } from '../team-member.model';
import { MockComponent } from 'ng-mocks';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';

describe('TeamMemberCardGridComponent', () => {
  let spectator: Spectator<TeamMemberCardGridComponent>;
  const createComponent = createComponentFactory({
    component: TeamMemberCardGridComponent,
    shallow: true,
    declarations: [MockComponent(TeamMemberCardComponent)],
  });

  const selectors = {
    loadingSection: () => spectator.query('[data-test=loading-section]'),
    cardGrid: () => spectator.query('[data-test=card-grid]'),
    teamMemberCardComponent: () => spectator.queryAll(TeamMemberCardComponent),
  };

  describe('when cards are loading', () => {
    beforeEach(() => {
      spectator = createComponent({
        props: { memberCards: null },
      });
    });

    it('should render loading screen when the cards are not set', () => {
      expect(selectors.loadingSection()).not.toBeNull();
      expect(selectors.cardGrid()).toBeNull();
      expect(spectator.fixture).toMatchSnapshot();
    });
  });
  describe('when cards are loaded', () => {
    const memberCards = {
      first: {},
      second: {},
      third: {},
    } as MemberCards;

    beforeEach(() => {
      spectator = createComponent({
        props: { memberCards },
      });
    });

    it('should render card list when cards are loaded', () => {
      expect(selectors.loadingSection()).toBeNull();
      expect(selectors.cardGrid()).not.toBeNull();
      expect(spectator.fixture).toMatchSnapshot();
    });
    it('should send <app-team-member-card> [memberCard] to the loaded card', () => {
      const [first, second, third] = selectors.teamMemberCardComponent();
      expect(first.memberCard).toEqual(memberCards.first);
      expect(second.memberCard).toEqual(memberCards.second);
      expect(third.memberCard).toEqual(memberCards.third);
    });
  });
});
