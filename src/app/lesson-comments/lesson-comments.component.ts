import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-comments',
  templateUrl: './lesson-comments.component.html',
  styleUrls: ['./lesson-comments.component.scss']
})
export class LessonCommentsComponent implements OnInit {
  @Input() id;
  constructor() { }

  ngOnInit() {
  }

}
