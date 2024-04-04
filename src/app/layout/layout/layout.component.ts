import {
  AsyncPipe,
  NgIf,
  NgTemplateOutlet
} from '@angular/common';
import {
  Component,
  DestroyRef,
  inject
 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { LayoutService } from '@navigation/layout.service';
import { Observable } from 'rxjs';
import { HeadingComponent } from '../components/heading/heading.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
      RouterOutlet,
      NgTemplateOutlet,
      NgIf,
      SidenavComponent,
      HeadingComponent,
      AsyncPipe
    ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  sidenavCollapsed$:Observable<boolean>=this.layoutservice.sidenavCollapsed$;
  isDesktop$=this.layoutservice.isDesktop$;

  sidenavOpen$: Observable<boolean> = this.layoutservice.sidenavOpen$;
  private readonly DestroyRef:DestroyRef=inject(DestroyRef);

  constructor(
    private layoutservice:LayoutService,
    ){}


  ngOnInit(){

    this.isDesktop$.
    pipe(
      takeUntilDestroyed(this.DestroyRef)
    )
    .subscribe(isDesktop=>{
      if(isDesktop){
       this.layoutservice.openSidenav();
      }else{
        this.layoutservice.closeSidenav();
      }
    })
  }

  onSidenavClosed(): void {
    this.layoutservice.closeSidenav();
  }
  // logo="assets/img/logo/logo.svg";


  // isCollpsedSidenav:boolean=true;
  // toogleSidenav()
  // {
  //   console.log('ingresando en el log')
  //   this.isCollpsedSidenav=!this.isCollpsedSidenav;
  // }

}
