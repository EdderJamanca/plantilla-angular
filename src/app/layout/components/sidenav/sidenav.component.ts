import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SidenavHeadingComponent } from './sidenav-heading/sidenav-heading.component';
import { SidenavSearchComponent } from './sidenav-search/sidenav-search.component';
import { LayoutService } from '@navigation/layout.service';
import { Observable, map, of, startWith, switchMap } from 'rxjs';
import { NavigationItem } from '@navigation/navigation-item.interface';
import { NavigationService } from '@navigation/navigation.service';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { ScrollbarComponent } from '@components/scrollbar/scrollbar.component';
import { PopoverService } from '@components/popover/popover.service';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { SidenavUserComponent } from './sidenav-user/sidenav-user.component';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    SidenavHeadingComponent,
    SidenavSearchComponent,
    SidenavItemComponent,
    ScrollbarComponent,
    DialogModule,
    NgIf,
    NgFor,
    AsyncPipe
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  @Input() collapsed:boolean=false;

  collapsedOpen$=this.layoutservice.sidenavCollapsedOpen$;
  items$:Observable<NavigationItem[]>=this.navigationService.items$;

  userMenuOpen$:Observable<boolean>=of(false);

  constructor(
    private layoutservice:LayoutService,
    private navigationService:NavigationService,
    private readonly popoverService:PopoverService,
    private readonly dialog: Dialog
    ){}

    collapseOpenSidenav(){
      this.layoutservice.collapseOpenSidenav();
    }
    collapseCloseSidenav(){
      this.layoutservice.collapseCloseSidenav();
    }

  // isCollpsedSidenav:boolean=true;
  toogleSidenav(event:boolean)
  {
    if(typeof event =='undefined') return;

    this.collapsed
      ? this.layoutservice.expandSidenav()
      : this.layoutservice.collapseSidenav();
  }


  openProfileMenu(origin:HTMLDivElement):void {
    this.userMenuOpen$=of(
      this.popoverService.open({
        content:SidenavUserComponent,
        origin,
        offsetY:-8,
        width:origin.clientWidth,
        position:[
          {
            originX:'center',
            originY:'top',
            overlayX:'center',
            overlayY:'bottom'
          }
        ]
      })
    ).pipe(
      switchMap((popoverRef)=>popoverRef.afterClosed$.pipe(map(()=>false))),startWith(true)
    )
  }
}
