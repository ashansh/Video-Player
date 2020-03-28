import { Component } from '@angular/core';
import { FetchVideoStreamsService } from './services/fetch-video-streams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'video-player-project';

  constructor() {} 
}
