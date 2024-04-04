import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LayoutService } from '@navigation/layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav-heading',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './sidenav-heading.component.html',
  styleUrl: './sidenav-heading.component.scss'
})
export class SidenavHeadingComponent {

  @Output() toogleCollapse=new EventEmitter<boolean>();
  logo="assets/img/logo/logo.svg";

  sidenavCollapsed$:Observable<boolean>=this.layoutservice.sidenavCollapsed$;

  isDesktop$: Observable<boolean> = this.layoutservice.isDesktop$;

  // constructor(private layoutservice:LayoutService){}
  constructor(private layoutservice:LayoutService){}

  toogleSidenav()
  {
     this.toogleCollapse.emit(true);
  }


}
