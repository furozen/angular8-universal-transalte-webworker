import {Component, Input, OnInit} from '@angular/core';
import {DateFormatCases, ILesson, LessonsService} from '../lessons.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  @Input() data:ILesson;
  constructor(private lessonsService:LessonsService) {
  }

  get dateTime():string{
    return this.lessonsService.getFormattedDateTime(this.data, DateFormatCases.time);
  }

  get picture():string{
    return this.lessonsService.getCardAsset(this.data);
  }

  get avatar():string{
    return  this.lessonsService.getAvatarAsset(this.data);
  }

  ngOnInit() {
  }

}
