import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Amenities } from '../models/Amenities';

@Injectable({
  providedIn: 'root',
})
export class AmenetiesService {
  private amenitiesUrl = `${environment.apiUrl}/amenities`;

  constructor(private httpClient: HttpClient) {}
  getAmenities(): Observable<Amenities[]> {
    return this.httpClient.get<Amenities[]>(this.amenitiesUrl);
  }
}
