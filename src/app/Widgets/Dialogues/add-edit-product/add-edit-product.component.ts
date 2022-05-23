import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
      image: [null, [Validators.required]],
      category: [null, [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (!this.productForm.valid) {
      return;
    }
    this.dialogRef.close(this.productForm.value);
  }
}
