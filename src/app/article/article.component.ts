import { Component, OnInit, Input } from '@angular/core';
import { Article } from './aritcle.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@Input() artical:Article;

 
  constructor() {
    //this.artical = new Article("Angular","http://angular.io",10);
   }

  ngOnInit() {
  }

  voteup()
  {
    this.artical.voteup;
    
  }

  voteDown()
  {
    this.artical.voteDown;
    
  }
}
