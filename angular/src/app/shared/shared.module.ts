import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlService } from './services/url.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UrlService
  ]
})
export class SharedModule { }
