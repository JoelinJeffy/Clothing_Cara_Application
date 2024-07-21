import { createAction, props } from '@ngrx/store';
import { Amenities } from '../../models/Amenities';

export const loadAmenities = createAction('loadAmenities');
export const loadAmenitiesSuccess = createAction(
  'loadAmenitiesSuccess',
  props<{ amenities: Amenities[] }>()
);
export const loadAmenitiesFailure = createAction(
  'loadAmenitiesFailure',
  props<{ error: any }>()
);
