import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from '../about-us/about-us.component';
@Component({
  selector: 'app-home',
  imports: [CommonModule,AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   categories = [
    {
      name: 'Allopathy',
      iconClass: 'bi bi-stethoscope',
      isPrimary: true,
    },
    {
      name: 'Ayurvedic',
      iconClass: 'bi bi-leaf',
      isPrimary: false,
    },
    {
      name: 'Homeopathy',
      iconClass: 'bi bi-mortarboard',
      isPrimary: true,
    },
    {
      name: 'Autism Therapy',
      iconClass: 'bi bi-puzzle',
      isPrimary: false,
    },
    {
      name: 'Senior Care',
      iconClass: 'bi bi-person',
      isPrimary: true,
    },
  ];

  onCategoryClick(category: any) {
    alert(`You clicked on ${category.name}`);
  }
}
