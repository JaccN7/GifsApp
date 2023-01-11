import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchesGifsComponent } from './searches-gifs/searches-gifs.component';
import { ResultGifsComponent } from './result-gifs/result-gifs.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchesGifsComponent,
    ResultGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
