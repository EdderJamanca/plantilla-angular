import {
   ENVIRONMENT_INITIALIZER,
   EnvironmentProviders,
   Provider,
   inject } from "@angular/core";
import { NavigationService } from "./navigation.service";
import { NavigationLoaderService } from "./navigation-loader.service";

export function provideNavigation():Array<Provider | EnvironmentProviders>{
  return [
    {
      provide:ENVIRONMENT_INITIALIZER,
      useValue: ()=>inject(NavigationService),
      multi:true
    },
    {
      provide:ENVIRONMENT_INITIALIZER,
      useValue:()=>inject(NavigationLoaderService),
      multi:true
    }
  ]
}
