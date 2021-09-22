import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizQuestions: any = [];
  quizSize: number = 0;
  defaultPercentageQuizSize: any;
  currentQuizNumber: number = 0;
  sumTotal: number = 0;
  quizOptions: any = [];
  defaultScoreText:string = 'Your Score: ?';

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.getQuizArray();
  }

  getQuizArray() {
    this.quizService.loadQuizArray().subscribe((data: any) => {
      this.quizQuestions = data;
      this.quizSize = data.length;
      this.quizOptions = data.choices


    },
      (error: any) => {
        console.log(error)
      }
    )
  }

  optionRadioButtonClicked(q: any, options: any, event: any) {

    this.setCurrentProgressBarPercentageLevel(event, this.quizSize);

    const indexOfSelectedOption = q.choices.findIndex((item: any) => item.text === options.text);

    if (indexOfSelectedOption === q.correctChoiceIndex) {
      this.sumTotal = this.sumTotal + 1;
    }
    if (indexOfSelectedOption === q.correctChoiceIndex) {
      this.sumTotal = this.sumTotal + 0;
    }

    // console.log(this.sumTotal)
  }

  setCurrentProgressBarPercentageLevel(event: any, noOfQuizQuestions: any) {
    this.defaultPercentageQuizSize = (event.target.id / noOfQuizQuestions) * 100;
  }

  submit() {
      this.defaultScoreText = `You scored ${this.sumTotal} out of ${this.quizSize}`
  }

}
