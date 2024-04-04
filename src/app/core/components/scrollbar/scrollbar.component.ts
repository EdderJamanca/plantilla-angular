import { Component, ElementRef, Input, NgZone } from '@angular/core';
import SimpleBar from 'simplebar';

@Component({
  selector: 'app-scrollbar',
  standalone: true,
  imports: [],
  template:`<ng-content></ng-content>`,
  styleUrl: './scrollbar.component.scss',
  host:{
    class:'vex-scrollbar'
  }
})
export class ScrollbarComponent {

  @Input() options?:Partial<any>;

  scrollbarRef?:SimpleBar;

  constructor(
    private _element:ElementRef,
    private zone:NgZone
  ){}

  ngAfterContentInit(){
    this.zone.runOutsideAngular(()=>{
      this.scrollbarRef=new SimpleBar(
        this._element.nativeElement,
        this.options
      )
    })
  }

  ngOnDestroy():void{
    if(this.scrollbarRef && (this.scrollbarRef as any).unMount){
      (this.scrollbarRef as any).unMount();
    }
  }

}
