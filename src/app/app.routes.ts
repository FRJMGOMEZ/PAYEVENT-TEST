import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const ROUTES: Routes = [
  
{path:'',component:PagesComponent}];


export const APPROUTES = RouterModule.forRoot(ROUTES, {initialNavigation: 'enabled',paramsInheritanceStrategy: 'always',useHash: true});