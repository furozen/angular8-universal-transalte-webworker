import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonHrComponent } from './lesson-hr.component';

describe('LessonHrComponent', () => {
  let component: LessonHrComponent;
  let fixture: ComponentFixture<LessonHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
