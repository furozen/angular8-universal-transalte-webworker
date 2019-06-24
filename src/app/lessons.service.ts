import { Injectable } from '@angular/core';
import {I18nContext} from '@angular/compiler/src/render3/view/i18n/context';
import {from, Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

enum Lang{
  en ='en',
  ru ='ru'
}

enum LessonLevel{
  beginner = 'beginner',
  intermediate  = 'intermediate',
  advanced = 'advanced'
}

export enum DateFormatCases {
  time,
  since
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
  contents:string,
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
    
    contents:'1. Фрукты; 2. Овощи',
    
    test:' Пройдите интересный тест ',
    timeStamp: 1561058698217,

    likes:35,
    comments:5,
    shares:17,
    views:60,
    stars:4.5,
    category:'Basic * Nouns'

  },{
    id:2,
    author:{
      name:'Anna',
      surname:'Dormund',
      avatar:'Avatar.png'
    },
    title:{
      en:'Present simple vol.1 for beginners',
      ru:'Время настоящее для начинающих',
    },
    primaryLang:Lang.ru,
    secondaryLang:Lang.en,
    picture:'Bg.png',
    level:LessonLevel.intermediate,
    description: 'Решили выучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Ежедневно поддерживай форму! Используй словарный тренажёр всего. Ежедневно поддерживай форму! Используй словарный тренажёр всего.',
    
    contents:'1. Фрукты; 2. Овощи',
    
    test:' Пройдите интересный тест ',
    timeStamp: 1561058698217,

    likes:35,
    comments:5,
    shares:17,
    views:60,
    stars:4.5,
    category:'Basic * Nouns'

  },{
    id:3,
    author:{
      name:'Anna',
      surname:'Dormund',
      avatar:'Avatar.png'
    },
    title:{
      en:'Present simple vol.1 for beginners',
      ru:'Время настоящее для начинающих',
    },
    primaryLang:Lang.ru,
    secondaryLang:Lang.en,
    picture:'Bg.png',
    level:LessonLevel.intermediate,
    description: 'Решили выучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Ежедневно поддерживай форму! Используй словарный тренажёр всего. Ежедневно поддерживай форму! Используй словарный тренажёр всего.',
    
    contents:'1. Фрукты; 2. Овощи',
    
    test:' Пройдите интересный тест ',
    timeStamp: 1561058698217,

    likes:35,
    comments:5,
    shares:17,
    views:60,
    stars:4.5,
    category:'Basic * Nouns'

  },{
    id:4,
    author:{
      name:'Anna',
      surname:'Dormund',
      avatar:'Avatar.png'
    },
    title:{
      en:'Present simple vol.1 for beginners',
      ru:'Время настоящее для начинающих',
    },
    primaryLang:Lang.ru,
    secondaryLang:Lang.en,
    picture:'Bg.png',
    level:LessonLevel.intermediate,
    description: 'Решили выучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Ежедневно поддерживай форму! Используй словарный тренажёр всего. Ежедневно поддерживай форму! Используй словарный тренажёр всего.',
    
    contents:'1. Фрукты; 2. Овощи',
    
    test:' Пройдите интересный тест ',
    timeStamp: 1561058698217,

    likes:35,
    comments:5,
    shares:17,
    views:60,
    stars:4.5,
    category:'Basic * Nouns'

  },{
    id:5,
    author:{
      name:'Anna',
      surname:'Dormund',
      avatar:'Avatar.png'
    },
    title:{
      en:'Present simple vol.1 for beginners',
      ru:'Время настоящее для начинающих',
    },
    primaryLang:Lang.ru,
    secondaryLang:Lang.en,
    picture:'Bg.png',
    level:LessonLevel.intermediate,
    description: 'Решили выучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Ежедневно поддерживай форму! Используй словарный тренажёр всего. Ежедневно поддерживай форму! Используй словарный тренажёр всего.',
    
    contents:'1. Фрукты; 2. Овощи',
    
    test:' Пройдите интересный тест ',
    timeStamp: 1561058698217,

    likes:35,
    comments:5,
    shares:17,
    views:60,
    stars:4.5,
    category:'Basic * Nouns'

  },{
    id:6,
    author:{
      name:'Anna',
      surname:'Dormund',
      avatar:'Avatar.png'
    },
    title:{
      en:'Present simple vol.1 for beginners',
      ru:'Время настоящее для начинающих',
    },
    primaryLang:Lang.ru,
    secondaryLang:Lang.en,
    picture:'Bg.png',
    level:LessonLevel.intermediate,
    description: 'Решили выучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Ежедневно поддерживай форму! Используй словарный тренажёр всего. Ежедневно поддерживай форму! Используй словарный тренажёр всего.',
    
    contents:'1. Фрукты; 2. Овощи',
    
    test:' Пройдите интересный тест ',
    timeStamp: 1561058698217,

    likes:35,
    comments:5,
    shares:17,
    views:60,
    stars:4.5,
    category:'Basic * Nouns'

  },{
    id:7,
    author:{
      name:'Anna',
      surname:'Dormund',
      avatar:'Avatar.png'
    },
    title:{
      en:'Present simple vol.1 for beginners',
      ru:'Время настоящее для начинающих',
    },
    primaryLang:Lang.ru,
    secondaryLang:Lang.en,
    picture:'Bg.png',
    level:LessonLevel.intermediate,
    description: 'Решили выучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Ежедневно поддерживай форму! Используй словарный тренажёр всего. Ежедневно поддерживай форму! Используй словарный тренажёр всего.',
    
    contents:'1. Фрукты; 2. Овощи',
    
    test:' Пройдите интересный тест ',
    timeStamp: 1561058698217,

    likes:35,
    comments:5,
    shares:17,
    views:60,
    stars:4.5,
    category:'Basic * Nouns'

  },{
    id:8,
    author:{
      name:'Anna',
      surname:'Dormund',
      avatar:'Avatar.png'
    },
    title:{
      en:'Present simple vol.1 for beginners',
      ru:'Время настоящее для начинающих',
    },
    primaryLang:Lang.ru,
    secondaryLang:Lang.en,
    picture:'Bg.png',
    level:LessonLevel.intermediate,
    description: 'Решили выучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Ежедневно поддерживай форму! Используй словарный тренажёр всего. Ежедневно поддерживай форму! Используй словарный тренажёр всего.',
    
    contents:'1. Фрукты; 2. Овощи',
    
    test:' Пройдите интересный тест ',
    timeStamp: 1561058698217,

    likes:35,
    comments:5,
    shares:17,
    views:60,
    stars:4.5,
    category:'Basic * Nouns'

  },{
    id:9,
    author:{
      name:'Anna',
      surname:'Dormund',
      avatar:'Avatar.png'
    },
    title:{
      en:'Present simple vol.1 for beginners',
      ru:'Время настоящее для начинающих',
    },
    primaryLang:Lang.ru,
    secondaryLang:Lang.en,
    picture:'Bg.png',
    level:LessonLevel.intermediate,
    description: 'Решили выучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Ежедневно поддерживай форму! Используй словарный тренажёр всего. Ежедневно поддерживай форму! Используй словарный тренажёр всего.',
    
    contents:'1. Фрукты; 2. Овощи',
    
    test:' Пройдите интересный тест ',
    timeStamp: 1561058698217,

    likes:35,
    comments:5,
    shares:17,
    views:60,
    stars:4.5,
    category:'Basic * Nouns'

  },{
    id:10,
    author:{
      name:'Anna',
      surname:'Dormund',
      avatar:'Avatar.png'
    },
    title:{
      en:'Present simple vol.1 for beginners',
      ru:'Время настоящее для начинающих',
    },
    primaryLang:Lang.ru,
    secondaryLang:Lang.en,
    picture:'Bg.png',
    level:LessonLevel.intermediate,
    description: 'Решили выучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Ежедневно поддерживай форму! Используй словарный тренажёр всего. Ежедневно поддерживай форму! Используй словарный тренажёр всего.',
    
    contents:'1. Фрукты; 2. Овощи',
    
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


export interface DateObject {
  year:number;
  month:number;
  day:number;
  hour:number;
  minute:number;
}

export interface IMessageCommand {
  type:'command';
  command:string;
}
export interface IUpdateMessageCommand {
  command:'update',
  data:{id?:number}
}

@Injectable({
  providedIn: 'root'
})

export class LessonsService {
  data:ILesson[] = [];
  lesson:ILesson;
  private provider:Observable<ILesson>;

  messenger:Subject<object> = new Subject();

  constructor(private translate:TranslateService) {
    this.provider = from(mockData);

    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./data-worker.worker', { type: 'module' });
      worker.onmessage = this.onMessage;
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      console.log(`webworker is not supported`);
    }
  }

  onMessage = ({ data:message }) => {
    if(message['type'] === 'command') {
      message = message as IMessageCommand;
      switch (message.command) {
        case 'update':
          this.messenger.next(message);
          mockData[0].likes+=10;
          //test update
          this.provider=from(mockData);
          break;
        default:
          console.log('worker:', message);
      }
    }
    console.log('worker:', message);
  };

  getLessonById(id:number){
    return this.provider.pipe(filter(item => item.id === id));
  }

  //level as filter example
  getLessons(exludeId:number, level?:LessonLevel){
    return this.provider.pipe(filter(item => item.id !== exludeId && level===undefined || item.level===level ));
  }

  getCardAsset(data:ILesson) {
    return '/assets/card/' + data.picture;
  }

  getAvatarAsset(data:ILesson){
    return '/assets/card/' + data.author.avatar
  }

  getDateTime(data:ILesson, formatCase:DateFormatCases ):DateObject{
    const date = new Date(data.timeStamp);
    switch (formatCase) {
      case DateFormatCases.time:{
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        return {year, month, day, hour, minute};
      }
      case DateFormatCases.since: {
        const now = new Date();
        let dateSince = new Date(now.getTime() - date.getTime());
        let year = dateSince.getFullYear() - 1970;
        let month = dateSince.getMonth();
        let day = dateSince.getDate();
        let hour = dateSince.getHours();
        let minute = dateSince.getMinutes();
        return {year, month, day, hour, minute};
      }
    }

  }

  getFormattedDateTime(data:ILesson, formatCase:DateFormatCases):string{
    let key;
    let date = this.getDateTime(data, formatCase);
    switch (formatCase) {
      case DateFormatCases.since:
        if(date.year){
          key = "sinceFormatingKeyYears";
        } else if(date.month) {
          key = "sinceFormatingKeyMonths";
        } else if(date.day) {
          key = "sinceFormatingKeyDays";
        } else if(date.hour) {
          key = "sinceFormatingKeyHours";
        }
        break;
      case DateFormatCases.time:
        key = "timeFormattingKey";
        break;
    }

    return this.translate.instant(key,date);
  }

}
