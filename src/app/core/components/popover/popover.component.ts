import { Component, TemplateRef } from '@angular/core';
import { PopoverContent, PopoverRef } from './popover-ref';
import { NgComponentOutlet, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgTemplateOutlet,
    NgComponentOutlet
  ],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss'
})
export class PopoverComponent {

  renderMethod:'template' |'component' | 'text'='component';
  content:PopoverContent;
  context:any;

  constructor(
    private popoverRef:PopoverRef
  ){}

  ngOnInit(){
    this.content=this.popoverRef.content;

    if(typeof this.content  == 'string'){
      this.renderMethod='text';
    }

    if(this.content instanceof TemplateRef){
      this.renderMethod='template';
      this.context={
        close:this.popoverRef.close.bind(this.popoverRef)
      }
    }

  }

}
