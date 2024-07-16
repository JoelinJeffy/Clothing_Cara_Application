import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFeaturedproducts]',
})
export class FeaturedproductsDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseHover() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      'scale(1.05)'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'transform', 'scale(1)');
  }
}
