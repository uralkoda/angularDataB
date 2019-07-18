import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string ;


   constructor(private elRef: ElementRef, private rendrer: Renderer2) { } 

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.rendrer.setStyle(this.elRef.nativeElement,'background-color', 'blue' );
  }
  @HostListener('mouseover') onMouseOver(eventData: Event) {
    // this.rendrer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseout') onMouseOut(eventData: Event) {
    // this.rendrer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
