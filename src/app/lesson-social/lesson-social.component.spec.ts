import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSocialComponent } from './lesson-social.component';

describe('LessonSocialComponent', () => {
  let component: LessonSocialComponent;
  let fixture: ComponentFixture<LessonSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
