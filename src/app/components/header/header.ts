import { Component, HostBinding } from '@angular/core';

import { environment } from '../../../environments/environment';

import { DataService } from '../../services/data.service';

@Component({
	selector    : 'header-bar',
	templateUrl : 'header.html',
	styleUrls   : [ 'header.scss' ]
})

export class HeaderComponent {
	title         : string = 'Blank Canvas Angular App';
  env           : string = environment.env;

	constructor(
    private dataService : DataService
  ) {}
}