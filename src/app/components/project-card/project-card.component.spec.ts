import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PROJECTS } from '../../data/portfolio.data';
import { ProjectCardComponent } from './project-card.component';

describe('ProjectCardComponent', () => {
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectCardComponent);
    fixture.componentRef.setInput('project', PROJECTS[0]);
    fixture.detectChanges();
  });

  it('should show the project name', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toContain(
      PROJECTS[0].name,
    );
  });

  it('should have repository and demo links', () => {
    const links = fixture.nativeElement.querySelectorAll('.links a');
    expect(links.length).toBe(2);
    expect(links[0].getAttribute('href')).toBe(PROJECTS[0].repoUrl);
    expect(links[1].getAttribute('href')).toBe(PROJECTS[0].demoUrl);
  });
});
