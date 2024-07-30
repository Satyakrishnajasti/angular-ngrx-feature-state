import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { StoreModule } from '@ngrx/store';
import * as fromFeature from '../../store/reducer/feature.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FeatureEffects } from 'src/app/store/effects/feature.effects';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
  },
];

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFeature.featureKey, fromFeature.reducer),
    EffectsModule.forFeature([FeatureEffects]),
    RouterModule.forChild(routes),
  ],
})
export class ItemsModule {}
