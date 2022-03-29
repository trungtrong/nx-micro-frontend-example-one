import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { GalleryStoreModule } from '@monorepo-example-one/shared/data-store';
//
import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    BrowserModule,
    //
    // GalleryStoreModule,
    //
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
