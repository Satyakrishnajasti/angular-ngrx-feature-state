import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/service/api.service';
import {
  loadItems,
  loadItemsFailure,
  loadItemsSuccess,
} from '../action/feature.action';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FeatureEffects {
  constructor(
    private readonly actions$: Actions,
    private partsPublicationsService: ApiService
  ) {}

  public loadBulletins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      switchMap(() => {
        return this.partsPublicationsService.getItems().pipe(
          map((data) => {
            return loadItemsSuccess({
              items: data,
            });
          }),
          catchError((error) => {
            console.warn(error);
            return of(loadItemsFailure({ error: error }));
          })
        );
      })
    )
  );
}
