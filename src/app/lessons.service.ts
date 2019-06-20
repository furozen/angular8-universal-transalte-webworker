import { Injectable } from '@angular/core';
import {I18nContext} from '@angular/compiler/src/render3/view/i18n/context';
import {from, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

enum Lang{
  en ='en',
  ru ='ru'
}

enum LessonLevel{
  beginner = 'beginner',
  intermediate  = 'intermediate',
  advanced = 'advanced'
}

interface I18nTitles {
  [lang:string]:string;
}

interface IAuthor {
  name:string;
  surname:string;
  avatar:string;
}

export interface ILesson {
  id:number,
  author:IAuthor,
  title:I18nTitles,
  primaryLang:Lang,
  secondaryLang:Lang,
  picture:string,
  level:LessonLevel,
  description: string,
  // TODO make it more structured
  contents:string,
  // TODO make it more structured
  test:string,
  timeStamp:number,
  likes:number,
  comments:number,
  shares:number,
  views:number,
  stars:number,
  category:string

}

const mockData:ILesson[] = [
  {
    id:1,
    author:{
      name:'Anna',
      surname:'Dormund',
      avatar:'Avatar.png'
    },
    title:{
      en:'Fruits and vegetables',
      ru:'Фрукты и овощи',
    },
    primaryLang:Lang.ru,
    secondaryLang:Lang.en,
    picture:'Bg.png',
    level:LessonLevel.intermediate,
    description: 'Решили выучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Ежедневно поддерживай форму! Используй словарный тренажёр всего. Ежедневно поддерживай форму! Используй словарный тренажёр всего.',
    // TODO make it more structured
    contents:'1. Фрукты; 2. Овощи',
    // TODO make it more structured
    test:' Пройдите интересный тест ',
    timeStamp: 1561058698217,

    likes:35,
    comments:5,
    shares:17,
    views:60,
    stars:4.5,
    category:'Basic * Nouns'

  }
];


@Injectable({
  providedIn: 'root'
})

export class LessonsService {
  data:ILesson[] = [];
  lesson:ILesson;
  private provider:Observable<ILesson>
  constructor() {
    this.provider = from(mockData);
  }

  getLessonById(id:number){
    return this.provider.pipe(filter(item => item.id === id));
  }


}
