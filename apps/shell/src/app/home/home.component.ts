import { GalleryFacade } from '@monorepo-example-one/shared/data-store';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'monorepo-example-one-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cats = this.galleryFacade.selectedCats$.pipe(
    map((selectedCats: any) => Array.from(selectedCats.values()))
  ) as any;
  constructor(private galleryFacade: GalleryFacade) { }

  ngOnInit(): void {
    //this.galleryFacade.init();
  }
}
