import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AmenetiesService } from '../../services/amenities.service';

import {
  loadAmenities,
  loadAmenitiesFailure,
  loadAmenitiesSuccess,
} from './amenities.action';
@Injectable()
export class AmenitiesEffects {
  constructor(
    private actions$: Actions,
    private amenitiesService: AmenetiesService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAmenities),
      mergeMap(() =>
        this.amenitiesService.getAmenities().pipe(
          map((amenities) => loadAmenitiesSuccess({ amenities })),
          catchError((error) => of(loadAmenitiesFailure({ error })))
        )
      )
    )
  );
}
