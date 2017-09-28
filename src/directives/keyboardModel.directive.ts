import { Directive, ElementRef, HostListener, Input, Optional, Self } from '@angular/core';
import { MdInput } from '@angular/material';
import { MdKeyboardRef } from '../utils/keyboard-ref.class';
import { MdKeyboardComponent } from '../components/keyboard/keyboard.component';
import { MdKeyboardService } from '../services/keyboard.service';
import {NgModel} from '@angular/forms';

@Directive({
  selector: 'input[cmKeyboard], textarea[cmKeyboard], input[cmKeyboard], textarea[cmKeyboard]',
  providers: [NgModel]
})
export class MdKeyboardModelDirective {

  private _keyboardRef: MdKeyboardRef<MdKeyboardComponent>;

  @Input() mdKeyboard: string;

  @Input() darkTheme: boolean;

  @Input() duration: number;

  @Input() hasAction: boolean;

  @Input() isDebug: boolean;

  @HostListener('focus', ['$event'])
  private _showKeyboard() {

    let key = window.localStorage['keyboard'];
    if (key && key === 'true') {
      this._keyboardRef = this._keyboardService.open(this.mdKeyboard, {
        darkTheme: this.darkTheme,
        duration: this.duration,
        hasAction: this.hasAction,
        isDebug: this.isDebug
      });
      this._keyboardRef.instance.setInputInstanceModel(this._elementRef, this._control, this._model);
    }
  }

  @HostListener('blur', ['$event'])
  private _hideKeyboard() {
    if (this._keyboardRef) {
      this._keyboardRef.dismiss();
    }
  }

  constructor(private _elementRef: ElementRef,
              private _keyboardService: MdKeyboardService,
              private _model: NgModel,
              @Optional() @Self() private _control?: MdInput) {}

}
