import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector    : 'homepage',
  templateUrl : 'homepage.html',
  styleUrls   : [ 'homepage.scss' ]
})

export class HomepageComponent {
	constructor(
    private dataService : DataService
  ) {}
}