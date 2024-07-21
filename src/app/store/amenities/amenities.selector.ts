import { createFeatureSelector, createSelector } from "@ngrx/store";
import { amenitiesState } from "./amenities.state";

export const amenitiesSelector = createFeatureSelector<amenitiesState>('amenities');
export const getAmenities = createSelector(amenitiesSelector, (state) => { return state.amenities });