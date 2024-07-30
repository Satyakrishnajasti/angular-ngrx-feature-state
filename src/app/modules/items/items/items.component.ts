import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemsModuleFascadeService } from 'src/app/fascade/data.fascade';
import { loadItems } from 'src/app/store/action/feature.action';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor(public fascade: ItemsModuleFascadeService) {}

  ngOnInit(): void {
    this.fascade.dispatch(loadItems());
  }
}
