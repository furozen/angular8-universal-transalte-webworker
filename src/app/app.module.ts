import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';

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
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {I18n} from '@ngx-translate/i18n-polyfill';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    })
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
