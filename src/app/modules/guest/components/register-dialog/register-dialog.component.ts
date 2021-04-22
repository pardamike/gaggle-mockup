import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {

  registerForm: FormGroup;
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {foo: 'bar'},
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (!this.registerForm.valid) {
      this.registerForm.controls.username.markAsTouched();
      this.registerForm.controls.password.markAsTouched();
      this.registerForm.controls.email.markAsTouched();
      return;
    }
    this.dialogRef.close();
    this.router.navigate(['/app/dashboard/home']);
  }
}
