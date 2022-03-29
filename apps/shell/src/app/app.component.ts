import { Component } from '@angular/core';
import { GalleryFacade } from '@monorepo-example-one/shared/data-store';

@Component({
  selector: 'monorepo-example-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private galleryFacade: GalleryFacade) {}
  ngOnInit(): void {
    this.galleryFacade.init();
  }
}
