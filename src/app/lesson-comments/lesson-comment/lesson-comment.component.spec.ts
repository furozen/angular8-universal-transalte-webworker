import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCommentComponent } from './lesson-comment.component';

describe('LessonCommentComponent', () => {
  let component: LessonCommentComponent;
  let fixture: ComponentFixture<LessonCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
