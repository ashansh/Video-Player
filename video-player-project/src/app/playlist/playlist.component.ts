import { Component, OnInit, Input, ViewEncapsulation, SecurityContext } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FetchVideoStreamsService } from '../services/fetch-video-streams.service';
import { DomSanitizer} from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlaylistComponent implements OnInit {
  
  public videoUrl : any = '';
  public slidesStore : any;
  public customOptions: OwlOptions = {
    margin: 10,
    autoplay:true,
    autoplayTimeout:3000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['', ''],
    responsive:{
      480:{
          items:2
      },
      600:{
          items:4
      }
    }
  }

  constructor(private service: FetchVideoStreamsService, private sanitizer: DomSanitizer, private spinner: NgxSpinnerService)
  { }
 
  ngOnInit() {
    this.spinner.show();
    this.service.fetchStreamingData().subscribe(data => {
      if(data) {
        this.spinner.hide();
        this.slidesStore = data;
        this.videoUrl = data[0].trailer;
        this.playVideo(this.videoUrl);
      }
    });
  }

  playVideo(url) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
