import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let spectator: SpectatorHost<CardComponent>;
  const createHost = createHostFactory({
    component: CardComponent,
    shallow: true,
  });

  it('should project image into image wrapper', () => {
    spectator = createHost(`
    <app-card>
      <picture image></picture>
    </app-card>
    `);
    expect(spectator.fixture).toMatchSnapshot();
  });
  it('should project content into content section', () => {
    spectator = createHost(`
    <app-card>
      <section content></section>
    </app-card>
    `);
    expect(spectator.fixture).toMatchSnapshot();
  });
});
