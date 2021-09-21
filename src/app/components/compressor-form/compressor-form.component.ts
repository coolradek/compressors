import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compressor-form',
  templateUrl: './compressor-form.component.html',
  styleUrls: ['./compressor-form.component.scss']
})
export class CompressorFormComponent {
  public compressorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

   public createForm(): void {
     this.compressorForm = new FormGroup({
        compressorName: new FormControl (''),
        serialNo: new FormControl(''),
     });
   }

   public onSubmit(): void {
    this.clearForm();
  }

  private clearForm(): void {
    this.compressorForm.controls.compressorName.reset();
    this.compressorForm.controls.serialNo.reset();
  }
}
