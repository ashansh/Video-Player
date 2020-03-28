import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchVideoStreamsService {

  constructor(private http: HttpClient) { }

  fetchStreamingData() {
    return this.http.get('https://valuefy-assignment-x.herokuapp.com/api/getVideos');
  } 
}
