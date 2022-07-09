import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AppointmentDetail } from './interface';

const inFormation: AppointmentDetail = {
  address: '135 jackson street',
  appointmentDateTime: new Date(),
  appointmentType: 'check',
  city: 'NY',
  clinicId: '013',
  email: 'hehe@gmail.com',
  firstName: 'will',
  lastName: 'johnson',
  phoneNumber: '650-227-3260',
  state: 'NY',
  zipCode: '22102',
};
@Injectable()
export class AppointmentService {
  constructor() {}
  getInfo() {
    return of(inFormation);
  }
}
