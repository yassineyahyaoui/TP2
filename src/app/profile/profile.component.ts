import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  @Input() user!: { name: string; email: string; imageUrl: string }; // Moved inside the class
  @Output() contact = new EventEmitter<string>(); // Moved inside the class

  onContact() {
    this.contact.emit(this.user.email);
  }}
