import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCommentsComponent } from './lesson-comments.component';

describe('LessonCommentsComponent', () => {
  let component: LessonCommentsComponent;
  let fixture: ComponentFixture<LessonCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
