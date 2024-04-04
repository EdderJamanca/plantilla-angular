import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutService } from '@navigation/layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav-search',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './sidenav-search.component.html',
  styleUrl: './sidenav-search.component.scss'
})
export class SidenavSearchComponent {

  sidenavCollapsed$:Observable<boolean>=this.layoutservice.sidenavCollapsed$;

  constructor(private layoutservice:LayoutService){}

}
