import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-cp-directive',
  templateUrl: './cp-directive.component.html',
  styleUrl: './cp-directive.component.css'
})
export class CpDirectiveComponent {
  isVisible = true;
  fruits = ["Pomme", "Banane", "Orange", "Mangue"];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  isHighlighted = true;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  consturctor(private el:ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {}

}
