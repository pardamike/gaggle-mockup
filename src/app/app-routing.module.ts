import { GuestComponent } from './shared/layouts/guest/guest.component';
import { AuthenticatedComponent } from './shared/layouts/authenticated/authenticated.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /**
   * Unauth routes:
   */
  {
    path: 'unauth',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./modules/guest/guest.module').then(m => m.GuestModule)
      },
    ]
  },
  /**
   * Auth routes:
   */
  {
    path: 'app',
    component: AuthenticatedComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/unauth/guest/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
