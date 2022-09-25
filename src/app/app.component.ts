import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'DigitalBook03Sep';
  mediaSub: Subscription;
  deviceXs: boolean | undefined;
  constructor(public mediaObserver: MediaObserver) {

  }
  ngOnInit() {
    
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
 
