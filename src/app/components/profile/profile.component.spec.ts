import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { PROFILES } from '../../data/portfolio.data';

describe('ProfileComponent', () => {
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProfileComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
  });

  it('should show one name per team member', () => {
    const names: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('h1');
    expect(names.length).toBe(PROFILES.length);
    expect(names[0].textContent).toContain(PROFILES[0].fullName);
  });

  it('should render one tag per skill, language and technology', () => {
    const total = PROFILES.reduce(
      (acc, profile) =>
        acc +
        profile.skills.length +
        profile.languages.length +
        profile.technologies.length,
      0,
    );
    expect(fixture.nativeElement.querySelectorAll('.tag').length).toBe(total);
  });
});
