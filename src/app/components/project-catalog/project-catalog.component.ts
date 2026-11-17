import { Component } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-catalog',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-catalog.component.html',
  styleUrl: './project-catalog.component.css',
})
export class ProjectCatalogComponent {
  projects = PROJECTS;
}
