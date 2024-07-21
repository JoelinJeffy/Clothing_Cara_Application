import { Amenities } from '../../models/Amenities';

export const initialState: amenitiesState = {
  amenities: null,
  error: null,
};
export interface amenitiesState {
  amenities: Amenities[] | null;
  error: string | null;
}
