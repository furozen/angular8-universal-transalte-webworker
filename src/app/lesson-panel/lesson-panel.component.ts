import {Component, Input, OnInit} from '@angular/core';
import {ILesson, LessonsService} from '../lessons.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-panel',
  templateUrl: './lesson-panel.component.html',
  styleUrls: ['./lesson-panel.component.scss']
})
export class LessonPanelComponent implements OnInit {
  @Input() id = 1;
  constructor(private lessonsService:LessonsService) {
    /*this.activeRoute.params.subscribe(params => {
      if (params.id) {
        this.id = parseInt(params.id);
      }
    });*/
  }
  data:ILesson;
  ngOnInit() {
    this.lessonsService.getLessonById(this.id).subscribe(item => this.data = item);
  }

}
