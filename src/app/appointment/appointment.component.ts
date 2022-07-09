import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dateBirth: null,
      zipCode: [
        null,
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
    });
  }
  onSubmit() {
    console.log(this.form.controls);
    this.router.navigate(['checkin']);
  }
}
