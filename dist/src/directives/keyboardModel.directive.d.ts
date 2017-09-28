import { ElementRef } from '@angular/core';
import { MdInput } from '@angular/material';
import { MdKeyboardService } from '../services/keyboard.service';
import { NgModel } from '@angular/forms';
export declare class MdKeyboardModelDirective {
    private _elementRef;
    private _keyboardService;
    private _model;
    private _control;
    private _keyboardRef;
    mdKeyboard: string;
    darkTheme: boolean;
    duration: number;
    hasAction: boolean;
    isDebug: boolean;
    private _showKeyboard();
    private _hideKeyboard();
    constructor(_elementRef: ElementRef, _keyboardService: MdKeyboardService, _model: NgModel, _control?: MdInput);
}
