import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
