import { SortPipe } from './pipes/sort.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SortPipe],
  exports: [SortPipe]
})
export class SharedModule { }
