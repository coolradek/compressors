import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompressorFormComponent } from '../components/compressor-form/compressor-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompressorFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CompressorFormComponent
  ]
})
export class AddCompressorModule { }
