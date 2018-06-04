import { Component } from '@angular/core';

import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector    : 'snack-bar',
  templateUrl : 'snack-bar.html',
  styleUrls   : [ 'snack-bar.scss' ]
})

export class SnackBarComponent {
  public  message         : string;
  public  emphasisMessage : string;
  public  action          : string;

  public  delay           : number;
  private defaultDelay    : number = 5000;

  private visible         : boolean = false;
  private visibleAnimate  : boolean = false;

  private delayID         : number;
  private snackID         : string;

  constructor(
    private snackBarService : SnackBarService
  ) {
    this.snackBarService.message
      .subscribe(options => this.show(options));
  }

  private show(options) : void {
    // is the bar already active
    // hide it and then show the new one
    if (this.visible) {
      this.forceHide(() => {
        this.show(options);
      });

      return;
    }

    this.assignOpts(options);

    this.visible = true;

    setTimeout(() => {
      this.visibleAnimate = true;

      this.delayID = this.delayHide();
    }, 50);
  }

  private assignOpts(options) : void {
    this.resetOpts();

    this.snackID = options.id;

    for (const option in options.snack) {
      this[option] = options.snack[option];
    }
  }

  private resetOpts() : void {
    this.message = this.emphasisMessage = this.action = this.snackID = null;

    this.delay = this.defaultDelay;
  }

  private delayHide() : any {
    return setTimeout(() => this.hide(), this.delay);
  }

  private forceHide(callback : Function) : void {
    clearTimeout(this.delayID);

    this.hide(false, callback);
  }

  private doAction() : void {
    clearTimeout(this.delayID);

    this.hide(true);
  }

  private hide(hiddenByAction : boolean = false, callback : Function = () => {}) : void {
    this.visibleAnimate = false;

    // if user action, fire promise immediately
    if (hiddenByAction)
      this.afterDismiss(true);

    setTimeout(() => {
      this.visible = false;

      // if dismissed after delay, fire promise after animation completes
      if (!hiddenByAction)
        this.afterDismiss(false);

      callback();
    }, 300);
  }

  private afterDismiss(hiddenByAction) : void {
    this.snackBarService.dismissed.next({
      id         : this.snackID,
      userAction : hiddenByAction
    });
  }
}