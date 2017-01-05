import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {ContactComponent} from './components/contact.component';

const appRoutes: Routes = [
  {
  path: '',
  component: UserComponent
  },
  {
  path: 'about',
  component: AboutComponent
  },
  {
  path: 'contact',
  component: ContactComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
