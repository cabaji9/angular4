
import {Component} from "@angular/core";
import {MdDialog, MdDialogRef} from "@angular/material";
@Component({
  selector: 'test-material',
  templateUrl: '../views/test-material.component.html',
  styleUrls: ['../views/test-material.component.less'],

})



export class TestMaterialComponent{
  selectedValue: string;
  selectedOption: string;

  constructor(public dialog: MdDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  color = 'primary';
  mode = 'determinate';
  value = 50;
  position = 'before';
}


@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: '../views/dialog/dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
