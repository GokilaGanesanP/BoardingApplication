import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.css',
})


export class AppComponent {
  title = 'BoardingApp';
}

