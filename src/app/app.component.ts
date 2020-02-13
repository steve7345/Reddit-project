import { Component } from '@angular/core';
import {Article} from "./article/aritcle.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];

  constructor()
  {
    this.articles=[
      new Article('Angular','http://angular.io',5),
      new Article('Google','http://google.ie',5),
      new Article('TikTok','http://tiktok.com',5)
    ];
  }
  addArticle(title:HTMLInputElement, link:HTMLInputElement):Boolean 
  {
    this.articles.push(new Article(title.value, link.value,0));
    title.value ='';
    link.value='';
    // abcde

    console.log(`Adding Article Title ${title.value}: and adding Article link ${link.value}`)
  return false;
  }
sortedArticles() : Article[] {
  return this.articles.sort((a:Article, b:Article)=> b.votes - a.votes);
}
  
}
