import {Component, Input, OnInit} from '@angular/core';
import {ILesson, LessonsService} from '../lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  @Input() exludeId;
  data:ILesson[] = [];
  constructor(private lessonsService:LessonsService) { }

  ngOnInit() {
     this.lessonsService.getLessons(this.exludeId).subscribe((item)=>{
       this.data.push(item);
     })
  }

}
