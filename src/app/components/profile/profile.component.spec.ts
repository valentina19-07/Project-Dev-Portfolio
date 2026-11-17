import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { PROFILE } from '../../data/portfolio.data';

describe('ProfileComponent', () => {
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProfileComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
  });

  it('should show the full name', () => {
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain(PROFILE.fullName);
  });

  it('should render one tag per skill, language and technology', () => {
    const total = PROFILE.skills.length + PROFILE.languages.length + PROFILE.technologies.length;
    expect(fixture.nativeElement.querySelectorAll('.tag').length).toBe(total);
  });
});

