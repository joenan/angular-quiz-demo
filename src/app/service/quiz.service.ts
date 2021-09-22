import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  loadQuizArray():any {
    return this.http.get('https://gist.githubusercontent.com/ttoomey/c8b14270e076165a97ff0f4e3ee251d3/raw/9b2477163e3b6617045db4caf6165c818e068918/questions.json');
  }


}
