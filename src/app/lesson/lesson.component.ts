import {Component, Input, OnInit} from '@angular/core';
import {ILesson} from '../lessons.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  @Input() data:ILesson;
  constructor() { }

  get dateTime():string{
    const date=new Date(this.data.timeStamp);
    return date.toLocaleTimeString();
  }

  get picture():string{
    return '/assets/card/'+this.data.picture;
  }

  get avatar():string{
    return '/assets/card/'+this.data.author.avatar;
  }

  ngOnInit() {
  }

}
