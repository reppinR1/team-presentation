import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamMembersService } from './team-members.service';

describe('TeamMembersService', () => {
  const memberCards = {};
  const mockHttpClient = {
    get: jest.fn(() =>
      of({
        data: [
          {
            attributes: {
              memberCards,
            },
          },
        ],
      })
    ),
  };
  const service = new TeamMembersService(mockHttpClient as any);
  describe('getTeamMembers()', () => {
    it('should call API/tasks/index.json', (done) => {
      service.getTeamMembers().subscribe(() => {
        expect(mockHttpClient.get).toHaveBeenCalledWith(
          `${environment.apiUrl}/task/index.json`
        );
        done();
      });
    });

    it('should call API/tasks/index.json', (done) => {
      service.getTeamMembers().subscribe((result) => {
        expect(result).toEqual(memberCards);
        done();
      });
    });
  });
});
