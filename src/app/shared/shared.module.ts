import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooleanStringPipe } from './pipes/boolean-string.pipe';



@NgModule({
  declarations: [BooleanStringPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooleanStringPipe
  ]
})
export class SharedModule { }
