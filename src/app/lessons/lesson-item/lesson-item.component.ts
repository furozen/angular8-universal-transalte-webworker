import {Component, Input, OnInit} from '@angular/core';
import {DateFormatCases, ILesson, LessonsService} from '../../lessons.service';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.scss']
})
export class LessonItemComponent implements OnInit {
  @Input() data:ILesson;
  constructor(private lessonsService:LessonsService) { }

  get dateTime():string{
    return this.lessonsService.getFormattedDateTime(this.data, DateFormatCases.since);
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
