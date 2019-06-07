import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectItem {
  label: string;
  id: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @HostBinding('class.app-select') private baseClass = true;

  private onChange: (val: SelectItem) => void;
  private onTouch: () => void;

  @Input() items: SelectItem[];
  @Input() canReset: boolean;
  @Input() placeholder: string;

  @Output() resetSelect = new EventEmitter<void>();

  selectedItem: SelectItem;
  disabled: boolean;
  isVisible: boolean;

  constructor(private $element: ElementRef) {}


  @HostListener('document:click', ['$event'])
  clickOutside(event) {
    if (!this.$element.nativeElement.contains(event.target)) {
      this.isVisible = false;
    }
  }

  get visibleLabel(): string {
    return this.selectedItem ? this.selectedItem.label : this.placeholder;
  }

  activateSelect() {
    this.isVisible = true;
  }

  registerOnChange(fn: (val: SelectItem) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(val: SelectItem): void {
    this.selectedItem = val;
    this.isVisible = false;
  }

  selectItem(item: SelectItem) {
    this.selectedItem = item;
    this.isVisible = false;
    this.onChange(this.selectedItem);
  }
}
