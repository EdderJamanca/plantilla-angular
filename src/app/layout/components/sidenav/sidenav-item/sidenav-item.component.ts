import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  DestroyRef,
  inject,
  HostBinding,
  OnInit,
  OnChanges,
  SimpleChanges} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { dropdownAnimation } from '@animation/animacion.dropdown';
import { LayoutService } from '@navigation/layout.service';
import { NavigationDropdown, NavigationItem, NavigationLink } from '@navigation/navigation-item.interface';
import { NavigationService } from '@navigation/navigation.service';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-sidenav-item',
  standalone: true,
  animations:[dropdownAnimation],
  imports: [
    NgIf,
    NgClass,
    NgFor,
    RouterLinkActive,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './sidenav-item.component.html',
  styleUrl: './sidenav-item.component.scss'
})
export class SidenavItemComponent  implements OnInit,OnChanges{

  @Input({required:true}) item!:NavigationItem;

 @Input({required:true}) level!:number;

 isOpen:boolean=false;
 isActive:boolean=false;

 isLink=this.navigationService.isLink;
 isDropdow=this.navigationService.isDropdown;
 isSubheading=this.navigationService.isSubheading;


 private readonly DestroyRef:DestroyRef=inject(DestroyRef);
//  sidenavCollapsed$:Observable<boolean>=this.layoutservice.sidenavCollapsed$;

//  constructor(){}
  constructor(
    private router:Router,
    private cd:ChangeDetectorRef,
    private navigationService:NavigationService
    // private layoutservice:LayoutService
    ){}

    @HostBinding('class')
    get levelClass() {
      return `item-level-${this.level}`;
    }

    ngOnInit(){
       this.router.events
            .pipe(
              filter((event)=>event instanceof NavigationEnd),
              filter(()=>this.isDropdow(this.item)),
              takeUntilDestroyed(this.DestroyRef)
            )
            .subscribe(()=>this.onRouterChange());

        this.navigationService.openChange$
              .pipe(
                filter(()=>this.isDropdow(this.item)),
                takeUntilDestroyed(this.DestroyRef)
              )
              .subscribe((item)=>this.onOpenChange(item))
    }

    ngOnChanges(changes: SimpleChanges): void {
       if(changes &&
         changes.hasOwnProperty('item') &&
         this.isDropdow(this.item)){
          this.onRouterChange();
         }
    }

    toggleOpen(){
      this.isOpen=!this.isOpen;
      this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
      this.cd.markForCheck();
    }
    onOpenChange(item:NavigationDropdown){
      if(this.isChildrenOf(this.item as NavigationDropdown,item)){
        return;
      }
      if(this.hasActiveChilds(this.item as NavigationDropdown)){
        return;
      }
      if(this.item !==item){
        this.isOpen=false;
        this.cd.markForCheck();
      }
    }

    onRouterChange(){
      if(this.hasActiveChilds(this.item as NavigationDropdown)){
        this.isActive=true;
        this.isOpen=true;
        this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
      }else {
        this.isActive=false;
        this.isOpen=false;
        this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
        this.cd.markForCheck();

      }
    }

    isChildrenOf(parent:NavigationDropdown,item:NavigationDropdown):boolean{
      if(parent.children.indexOf(item)!==-1){
        return true;
      }
      return parent.children
              .filter((child)=>this.isDropdow(child))
              .some((child)=>this.isChildrenOf(child as NavigationDropdown,item));
    }


    hasActiveChilds(parent: NavigationDropdown): boolean {

      return parent.children.some((child) => {
        if (this.isDropdow(child)) {
          return this.hasActiveChilds(child);
        }

        if (this.isLink(child) && !this.isFunction(child.route)) {
          return this.router.isActive(child.route as string, false);
        }
        return false;
      });
    }

    isFunction(prop:NavigationLink['route']):boolean{
      return prop instanceof Function;
    }
}
