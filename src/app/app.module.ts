import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';
import { LessonPanelComponent } from './lesson-panel/lesson-panel.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonSocialComponent } from './lesson-social/lesson-social.component';
import { LessonCommentsComponent } from './lesson-comments/lesson-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarMenuComponent,
    LessonPanelComponent,
    LessonComponent,
    LessonSocialComponent,
    LessonCommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
