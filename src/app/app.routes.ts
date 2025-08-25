import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { RegisterComponent } from './register/register.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { from } from 'rxjs';
export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'Home',component:HomeComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'booking',component:QuestionaireComponent},
    {path:'register',component:RegisterComponent}
];
