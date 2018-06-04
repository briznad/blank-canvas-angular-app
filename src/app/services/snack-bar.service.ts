import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import * as _ from 'lodash';

@Injectable()
export class SnackBarService {
  public message   : Subject<{ id : string, snack : any }>          = new Subject();
  public dismissed : Subject<{ id : string, userAction : boolean }> = new Subject();

  private snackLog = {};

  constructor() {
    this.dismissed
      .subscribe(data => this.snackLog[data.id].resolve(data.userAction));
  }

  public show(snack) : Promise<boolean> {
    // nothing to show; shut 'er down
    if (snack.message == null && snack.emphasisMessage == null)
      return;

    const id = _.uniqueId();

    this.message.next({ id, snack });

    return new Promise((resolve, reject) => {
      this.snackLog[id] = { resolve };
    });
  }
}