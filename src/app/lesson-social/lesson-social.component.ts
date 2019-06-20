import {Component, Input, OnInit} from '@angular/core';
import {ILesson} from '../lessons.service';

@Component({
  selector: 'app-lesson-social',
  templateUrl: './lesson-social.component.html',
  styleUrls: ['./lesson-social.component.scss']
})
export class LessonSocialComponent implements OnInit {
  @Input() data:ILesson;
  constructor() { }

  ngOnInit() {
  }

}
