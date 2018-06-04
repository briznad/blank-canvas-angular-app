import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
	selector    : 'menu',
	templateUrl : 'menu.html',
	styleUrls   : [ 'menu.scss' ]
})

export class MenuComponent {
  constructor(
    private dataService : DataService
  ) {}
}