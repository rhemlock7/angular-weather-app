import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(http: HttpClient) {
    // HTTP request to get weather data
    http.get<Config>('/api/config').subscribe(config => {
      // process the configuration.
    });

  }
}
