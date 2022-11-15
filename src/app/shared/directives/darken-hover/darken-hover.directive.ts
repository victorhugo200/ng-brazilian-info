import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkenHover]',
})
export class DarkenHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      '0.8s easy-in-out'
    );
  }

  @HostListener('mouseover')
  public onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(0.9)');
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'none');
  }
}
