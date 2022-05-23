import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private _snackBar: MatSnackBar,) {
  }

  onSuccess(message: string, title: string): void {
    this._snackBar.open(message, title, {
      duration: 3000
    });
  }
}
