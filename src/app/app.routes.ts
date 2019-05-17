import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { UserComponent } from './pages/user/user.component';

const ROUTES: Routes = [
{ path: "", redirectTo: "/users", pathMatch: "full" },    
{path:'users',component:PagesComponent},
{path:'user/:id',component:UserComponent}];


export const APPROUTES = RouterModule.forRoot(ROUTES, {initialNavigation: 'enabled',paramsInheritanceStrategy: 'always',useHash: true});