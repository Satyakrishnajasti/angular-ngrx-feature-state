import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { selectItems } from '../store/selector/feature.selector';

@Injectable({
  providedIn: 'root',
})
export class ItemsModuleFascadeService {
  constructor(private store: Store) {}

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  dispatchForItems() {
    return this.store.select(selectItems);
  }
}
