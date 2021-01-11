import {AfterViewChecked, AfterViewInit, Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appReadMore]'
})
export class ReadMoreDirective implements AfterViewInit, OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('readMore-length') private maxLength: number;
  // tslint:disable-next-line:no-input-rename
  @Input('readMore-element') private elementChange: HTMLElement;

  private currentText: string;
  private hideToggle = true;
  private text: string;
  private isCollapsed = true;

  constructor(private el: ElementRef) {
  }

  /**
   * @inheritDoc
   */
  public ngAfterViewInit() {
    this.text = this.elementChange.innerHTML || null;
    this.toggleView();
    if (!this.hideToggle) {
      this.el.nativeElement.classList.remove('hidden');
    } else {
      this.el.nativeElement.classList.add('hidden');
    }
    this.el.nativeElement.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.toggleView();
    });
  }

  /**
   * @inheritDoc
   */
  public ngOnChanges() {
    if (this.text) {
      // this.toggleView();
    }
  }

  /**
   * Toogle view - full text or not
   */
  private toggleView(): void {
    this.determineView();
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.el.nativeElement.querySelector('.more').style.display = 'none';
      this.el.nativeElement.querySelector('.less').style.display = 'inherit';
    } else {
      this.el.nativeElement.querySelector('.more').style.display = 'inherit';
      this.el.nativeElement.querySelector('.less').style.display = 'none';
    }
  }

  /**
   * Determine view
   */
  private determineView(): void {

    // tslint:disable-next-line:variable-name
    const _elementChange = document.getElementById(this.elementChange.id);
    if (this.text.length <= this.maxLength) {
      this.currentText = this.text;
      _elementChange.classList.remove(`less-text-more-${this.maxLength}`);
      this.isCollapsed = false;
      this.hideToggle = true;
      return;
    }
    this.hideToggle = false;
    if (this.isCollapsed === true) {
      // this.currentText = this.text.substring(0, this.maxLength) + '...';
      _elementChange.classList.add(`less-text-more-${this.maxLength}`);
    } else if (this.isCollapsed === false) {
      this.currentText = this.text;
      _elementChange.classList.remove(`less-text-more-${this.maxLength}`);
      // _elementChange.innerHTML = this.currentText;
    }
  }


}
