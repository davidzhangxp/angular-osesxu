import { createReducer, on } from '@ngrx/store';
import {
  requestAppointmentFailure,
  requestAppointmentSuccess,
} from './appointment.actions';

export const initialState = {};

export const appointmentReducer = createReducer(
  initialState,
  on(requestAppointmentSuccess, (state) => {
    return { ...state };
  }),
  on(requestAppointmentFailure, (state) => {
    return { ...state };
  })
);
