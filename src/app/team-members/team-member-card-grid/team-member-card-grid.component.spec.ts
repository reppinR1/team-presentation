import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberCardGridComponent } from './team-member-card-grid.component';

describe('TeamMemberCardGridComponent', () => {
  let component: TeamMemberCardGridComponent;
  let fixture: ComponentFixture<TeamMemberCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberCardGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
