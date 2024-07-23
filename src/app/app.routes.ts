import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      // {
      //   path:'dashboards/analyts',
      //   redirectTo:'/',
      //   pathMatch:'full'
      // },
      {
        path:'apps',
        children:[
          {
            path:'aio-table',
            loadComponent:()=>import('./pages/analytics01/analytics01.component')
          },
          {
            path:'chat',
            loadComponent:()=>import('./pages/analytics02/analytics02.component')
          },
          {
            path:'flujograma',
            loadComponent:()=>import('./pages/analytics02/analytics02.component')
          }
          // {
          //   path:'help-center',
          //   loadChildren:()=>
          //    import('./pages/analytics02/analytics02.component')
          // }
        ]
      },
      {
        path:'dashboards/analyts',
        pathMatch:'full',
        loadComponent:()=>
          import('./pages/analytics/analytics.component').then(m=>m.AnalyticsComponent)
      }
    ]
  },
  {
    path:'auth',
    loadChildren:()=>import('./Auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'**',
    loadChildren:()=>import('./error/error-404.component')
  }
];
