import { createReducer, on } from '@ngrx/store';
import {
  loadAmenities,
  loadAmenitiesFailure,
  loadAmenitiesSuccess,
} from './amenities.action';
import { initialState } from './amenities.state';

export const amenitiesReducer = createReducer(
  initialState,
  on(loadAmenitiesSuccess, (state, action) => {
    return {
      ...state,
      amenities: action.amenities,
      error: null,
    };
  }),
  on(loadAmenitiesFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
