import {Component} from '@angular/core';


@Component({
  selector: 'checkbox-configurable-example',
  templateUrl: '../views/controls-checkbox.component.html',
  styleUrls: ['../views/controls-checkbox.component.less'],
})
export class CheckboxConfigurableExample {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
}
