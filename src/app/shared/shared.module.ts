import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromError from '../store/reducers/error.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ErrorEffects } from '../store/effects/error.effects';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromError.errorFeatureKey, fromError.reducer),
    EffectsModule.forFeature([ErrorEffects])
  ],
  exports: [
    NotFoundComponent
  ]
})
export class SharedModule { }
