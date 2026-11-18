import { Component } from '@angular/core';
import { PROFILES } from '../../data/portfolio.data';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  profiles = PROFILES;
}
