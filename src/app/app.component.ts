import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Encuesta al cliente', url: '/folder/Encuesta al cliente', icon: 'mail' },
    { title: 'Reportes', url: '/folder/Reportes', icon: 'paper-plane' },
//   { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
//   { title: 'Archived', url: '/folder/archived', icon: 'archive' },
//   { title: 'Trash', url: '/folder/trash', icon: 'trash' },
//   { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
