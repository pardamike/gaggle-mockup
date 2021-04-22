import { HomeComponent } from './views/home/home.component';
import { MaterialModuleModule } from './../../shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModuleModule,
  ]
})
export class DashboardModule { }
