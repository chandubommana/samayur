import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questionaire',
  standalone: true,   // ✅ important
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.css']
})
export class QuestionaireComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  form!: FormGroup;
  isSubmitted = false;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern(/^(\d{10}|\S+@\S+\.\S+)$/)  // phone or email
      ]],
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    });
  }

  hideModal() {
    this.closeModalEvent.emit();
  }

onSubmit() {
  if (this.form.valid) {
    // You can send the form data to API here
    console.log(this.form.value);

    this.isSubmitted = true; // show success message
  }
}

closeModal() {
  this.isSubmitted = false; // reset for next time
  this.form.reset();        // clear form
  this.hideModal();         // your existing modal close method
}
}
