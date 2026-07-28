import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight: string = 'rgba(59, 130, 246, 0.25)';

  private defaultBg: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.defaultBg = this.el.nativeElement.style.backgroundColor;
    this.highlight(this.appHighlight || 'rgba(59, 130, 246, 0.25)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultBg);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
