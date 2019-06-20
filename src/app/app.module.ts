import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';
import { LessonPanelComponent } from './lesson-panel/lesson-panel.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonSocialComponent } from './lesson-social/lesson-social.component';
import { LessonCommentsComponent } from './lesson-comments/lesson-comments.component';
import { LessonCommentComponent } from './lesson-comments/lesson-comment/lesson-comment.component';
import { NewCommentComponent } from './lesson-comments/new-comment/new-comment.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonItemComponent } from './lessons/lesson-item/lesson-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarMenuComponent,
    LessonPanelComponent,
    LessonComponent,
    LessonSocialComponent,
    LessonCommentsComponent,
    LessonCommentComponent,
    NewCommentComponent,
    LessonsComponent,
    LessonItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
