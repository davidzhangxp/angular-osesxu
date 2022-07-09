import { createAction, props } from '@ngrx/store';

export const requestAppointment = createAction(
  '[Appointment Component] Ask Info'
);

export const requestAppointmentSuccess = createAction(
  '[Appointment Component] Ask Info Success'
);

export const requestAppointmentFailure = createAction(
  '[Appointment Component] Ask Info Failure'
);
