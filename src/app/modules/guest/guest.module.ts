import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { LoginComponent } from './views/login/login.component';
import { MaterialModuleModule } from './../../shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestRoutingModule } from './guest-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RegisterDialogComponent
  ]
})
export class GuestModule { }
