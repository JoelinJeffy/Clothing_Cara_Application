import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { Amenities } from '../../models/Amenities';
import { AmenetiesService } from '../../services/amenities.service';
import { loadAmenities } from '../../store/amenities/amenities.action';
import { getAmenities } from '../../store/amenities/amenities.selector';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrl: './amenities.component.css',
})
export class AmenitiesComponent {
  amenities$!: Observable<Amenities[]>;
  amenities!: Amenities[];

  constructor(private store: Store<AppState>, private ser: AmenetiesService) {
    this.amenities$ = this.store
      .select(getAmenities)
      .pipe(map((amenities) => amenities ?? []));
  }
  ngOnInit() {
    this.store.dispatch(loadAmenities());
  }
}
