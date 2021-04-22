import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { RegisterDialogComponent } from 'src/app/modules/guest/components/register-dialog/register-dialog.component';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  windowHeight: number;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.windowHeight = window.innerHeight;

    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.windowHeight = (evt.currentTarget as Window).innerHeight;
    });
  }

  registerDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '400px',
    });
  }
}
