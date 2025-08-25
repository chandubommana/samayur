import { Component } from '@angular/core';
import { ReactiveFormsModule,Validator,FormBuilder,FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentBookingComponent } from '../appointment-booking/appointment-booking.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [AppointmentBookingComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form!: FormGroup;
  submitted = false;
  displaymessage=false
  selectedRole: 'patient' | 'doctor' = 'patient';
  selectedDateTime: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      speciality: [''],
      experience: [''],
      description: [''],
      marital_status: [''],
      height_cm: [''],
      weight_kg: [''],
      current_illness: [''],
      appointment_request: ['', Validators.required],
      location: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls as { [key: string]: AbstractControl };
  }

  setRole(role: 'patient' | 'doctor') {
    this.selectedRole = role;

    if (role === 'doctor') {
      this.form.get('speciality')?.setValidators(Validators.required);
      this.form.get('experience')?.setValidators([Validators.required, Validators.min(0)]);
      this.form.get('description')?.setValidators(Validators.required);

      this.form.get('marital_status')?.clearValidators();
      this.form.get('height_cm')?.clearValidators();
      this.form.get('weight_kg')?.clearValidators();
      this.form.get('current_illness')?.clearValidators();
      this.form.get('appointment_request')?.clearValidators();
    } else {
      this.form.get('marital_status')?.setValidators(Validators.required);
      this.form.get('height_cm')?.setValidators([Validators.required, Validators.min(0)]);
      this.form.get('weight_kg')?.setValidators([Validators.required, Validators.min(0)]);
      this.form.get('current_illness')?.setValidators(Validators.required);
      this.form.get('appointment_request')?.setValidators(Validators.required);

      this.form.get('speciality')?.clearValidators();
      this.form.get('experience')?.clearValidators();
      this.form.get('description')?.clearValidators();
    }

    Object.keys(this.form.controls).forEach(field => {
      this.form.get(field)?.updateValueAndValidity();
    });
  }

  onDateTimeSelected(dateTime: string) {
  this.selectedDateTime = dateTime;
  this.form.get('appointment_request')?.setValue(dateTime);
}


 onSubmit(): void {
  this.submitted = true;

  if (this.form.invalid) {
    return;
  }

  console.log('Form Submitted!', this.form.value);

 
  this.displaymessage = true;

  
  setTimeout(() => {
    this.displaymessage = false;
    this.router.navigate(['/Home'])
  }, 3000);
}


closeMessage() {
  this.displaymessage = false;
}
}
