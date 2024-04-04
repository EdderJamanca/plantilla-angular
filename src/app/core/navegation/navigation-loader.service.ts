import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationItem } from './navigation-item.interface';
import { LayoutService } from './layout.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationLoaderService {

  private readonly _items:BehaviorSubject<NavigationItem[]>= new BehaviorSubject<NavigationItem[]>([]);

  get item$():Observable<NavigationItem[]>{
    return this._items.asObservable();
  }

  constructor(private readonly layoutService:LayoutService) {
     this.loadNavigation();
   }

   loadNavigation():void {
     this._items.next([
      {
        type: 'subheading',
        label: 'Dashboards',
        children: [
          {
            type: 'link',
            label: 'Analytics',
            route: '/',
            icon: 'fa-solid fa-chart-simple',
            routerLinkActiveOptions: { exact: true }
          }
        ]
      },
      {
        type: 'subheading',
        label: 'Apps',
        children: [
          {
            type: 'link',
            label: 'All-In-One Table',
            route: '/apps/aio-table',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'dropdown',
            label: 'Help Center',
            icon: 'fa-solid fa-chart-simple',
            children: [
              {
                type: 'link',
                label: 'Getting Started',
                route: '/apps/help-center/getting-started'
              },
              {
                type: 'link',
                label: 'Pricing & Plans',
                route: '/apps/help-center/pricing'
              },
              {
                type: 'link',
                label: 'FAQ',
                route: '/apps/help-center/faq'
              },
              {
                type: 'link',
                label: 'Guides',
                route: '/apps/help-center/guides'
              }
            ]
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: 'fa-solid fa-chart-simple'
          },
        ]
        }
     ])
   }
}
