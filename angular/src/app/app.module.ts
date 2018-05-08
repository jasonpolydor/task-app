import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SharedModule,
    TasksModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
