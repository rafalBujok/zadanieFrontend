import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.component.html',
  styleUrls: ['dialog-content.component.scss']
})
export class DialogContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }
}
