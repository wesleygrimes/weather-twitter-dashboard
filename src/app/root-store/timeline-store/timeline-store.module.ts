import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TimelineStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('timeline', featureReducer),
    EffectsModule.forFeature([TimelineStoreEffects])
  ],
  providers: [TimelineStoreEffects]
})
export class TimelineStoreModule {}
