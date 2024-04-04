import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LayoutService } from '@navigation/layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {


  // collapsedOpen$=this.layoutservice.sidenavCollapsedOpen$;

  isDesktop$: Observable<boolean> = this.layoutservice.isDesktop$;

  constructor(private layoutservice:LayoutService){}

  toogleSidenav()
  {
    this.layoutservice.openSidenav();
  }

}
