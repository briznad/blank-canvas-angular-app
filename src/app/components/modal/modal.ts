import { Component } from '@angular/core';

@Component({
  selector    : 'modal',
  templateUrl : 'modal.html',
  styleUrls   : [ 'modal.scss' ]
})

export class ModalComponent {
  public visible = false;
  private visibleAnimate = false;

  constructor() {}

  public show() : void {
    this.visible = true;

    setTimeout(() => this.visibleAnimate = true, 50);
  }

  public hide() : void {
    this.visibleAnimate = false;

    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event : MouseEvent) : void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}