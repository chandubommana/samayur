import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent {
  @Output() dateTimeSelected = new EventEmitter<string>();

  dateList: Date[] = [];
  selectedDate!: Date;
  selectedSlot: any = null;
  timeSlots: any[] = [];
  bookedSlots = ["14:00", "14:15"]; 

  constructor() {}

  ngOnInit() {
    this.dateList = this.getNextDays(15);
  }

  // Generate a list of next N days
  getNextDays(n: number): Date[] {
    const days: Date[] = [];
    for (let i = 0; i <= n; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      days.push(d);
    }
    return days;
  }

  // Generate 15-min slots between 9AM and 5PM
  generateTimeSlots(date: Date) {
    const slots: any[] = [];
    const start = new Date(date);
    start.setHours(9, 0, 0, 0);

    const end = new Date(date);
    end.setHours(17, 0, 0, 0);

    while (start <= end) {
      const timeStr = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
      slots.push({
        time: timeStr,
        booked: this.bookedSlots.includes(timeStr),
        selected: false
      });
      start.setMinutes(start.getMinutes() + 15);
    }

    this.timeSlots = slots;
  }

  // Select a date and generate slots
  selectDate(date: Date) {
    this.selectedDate = date;
    this.selectedSlot = null;
    this.generateTimeSlots(date);
  }

  // Select a slot
  selectSlot(slot: any) {
    if (slot.booked) return;

    this.timeSlots.forEach(s => s.selected = false);
    slot.selected = true;
    this.selectedSlot = slot;
  }

  // Confirm and emit full datetime
confirmDateTime() {
  if (!this.selectedDate || !this.selectedSlot) return;

  const selectedDateTime = new Date(this.selectedDate);

  if (this.selectedSlot.time) {
    const [hours, minutes] = this.selectedSlot.time.split(':');
    selectedDateTime.setHours(+hours, +minutes, 0, 0);
  }

  // Format for datetime-local input
  const formatted = selectedDateTime.toISOString().slice(0,16); 
  // "yyyy-MM-ddThh:mm"

  this.dateTimeSelected.emit(formatted);
}

}