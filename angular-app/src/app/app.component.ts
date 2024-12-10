import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { HighlightDirective } from './shared/directives/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule,
    HighlightDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {}