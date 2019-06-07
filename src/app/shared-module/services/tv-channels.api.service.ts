import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvChannelsApiService {
  constructor(private $http: HttpClient) {}

  fetchAllTVChannels() {
    return this.$http.get('/assets/channels.json');
  }
}
