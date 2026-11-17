import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PROJECTS } from '../../data/portfolio.data';
import { ProjectCatalogComponent } from './project-catalog.component';

describe('ProjectCatalogComponent', () => {
  let fixture: ComponentFixture<ProjectCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCatalogComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectCatalogComponent);
    fixture.detectChanges();
  });

  it('should contain exactly five projects', () => {
    expect(PROJECTS.length).toBe(5);
  });

  it('should render one card per project', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-project-card');
    expect(cards.length).toBe(PROJECTS.length);
  });
});
