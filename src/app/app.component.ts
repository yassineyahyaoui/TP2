import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP2';
  users=[
    {
      name:'Alice',
      email:'alice@example.com',
      imageUrl:"https://via.placeholder.com/150"
    },
    {
      name:'Charlie',
      email:'charlie@example.com',
      imageUrl:"https://via.placeholder.com/150"
    }
  ];
  onUserContact(email: string) {
    console.log(`contacter l'utilisateur: ${email}`);
    
  }
}
