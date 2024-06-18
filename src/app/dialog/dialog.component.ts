import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  // readonly dialog = inject(MatDialog);

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>, // Reference to the dialog itself
    // @Inject(MAT_DIALOG_DATA) public data: any, // Injecting data passed to the dialog
    private dialog: MatDialog // Injecting MatDialog
    ) {}

 
}

