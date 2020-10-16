import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooleanStringPipe } from './pipes/boolean-string.pipe';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [BooleanStringPipe],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooleanStringPipe
  ]
})
export class SharedModule { }
