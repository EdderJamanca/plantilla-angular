import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PopoverRef } from '../../../../core/components/popover/popover-ref';

@Component({
  selector: 'app-sidenav-user',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sidenav-user.component.html',
  styleUrl: './sidenav-user.component.scss'
})
export class SidenavUserComponent implements OnInit{

  constructor(private readonly popoverRef:PopoverRef){}

  ngOnInit(): void {}

  close(){
    setTimeout(()=>this.popoverRef.close(),250)
  }

}
