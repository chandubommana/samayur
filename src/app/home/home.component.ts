import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from '../about-us/about-us.component';
import { QuestionaireComponent } from '../questionaire/questionaire.component';
import { DoctorProfilesComponent } from '../doctor-profiles/doctor-profiles.component';
import { DepartmentsComponent } from '../departments/departments.component';
import { FooterComponent } from '../footer/footer.component';
import { ReviewComponent } from '../review/review.component';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutUsComponent,
    QuestionaireComponent,
    DoctorProfilesComponent,
    DepartmentsComponent,
    FooterComponent,
    ReviewComponent,
    CallToActionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showQuestionnaire = false;
  images: string[] = [
    'https://api.builder.io/api/v1/image/assets/TEMP/410a239d55fddb1295542f052f76656632c59775',
    'https://cnsdesigns.net/banner1[1].jpg',
    'https://cnsdesigns.net/banner2[1].jpg',
    'https://cnsdesigns.net/banner3[1].jpg'
  ];
  categories = [
    { name: 'Allopathy', iconClass: 'bi bi-heart-pulse', isPrimary: true },
    { name: 'Ayurvedic', iconClass: 'bi bi-leaf', isPrimary: false },
    { name: 'Homeopathy', iconClass: 'bi bi-droplet', isPrimary: true },
    { name: 'Autism Therapy', iconClass: 'bi bi-star', isPrimary: false },
    { name: 'Senior Care', iconClass: 'bi bi-person', isPrimary: true }
  ];

  currentIndex = 0;
  intervalId: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  openQuestionaire() {
    this.showQuestionnaire = true;
    this.renderer.addClass(document.documentElement, 'no-scroll');
    this.renderer.addClass(document.body, 'no-scroll');
  }

  closeQuestionnaire() {
    this.showQuestionnaire = false;
    this.renderer.removeClass(document.documentElement, 'no-scroll');
    this.renderer.removeClass(document.body, 'no-scroll');
  }
}
