import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from "./components/to-do/to-do.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToDoComponent,
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
}
