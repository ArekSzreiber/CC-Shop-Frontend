import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('form', {static: false}) checkoutForm: NgForm;

  telephonePattern;
  telephonePatternTestCases;

  constructor() {
  }

  ngOnInit() {
    this.telephonePattern = /^[0-9]{9}$/;
    this.telephonePatternTestCases = [
      {pattern: 'pattern', result: false},
      {pattern: '123123123', result: true},
      {pattern: '1231231234', result: false},
      {pattern: '555666777', result: true},
    ];
    for (let testCase of this.telephonePatternTestCases) {
      if (this.telephonePattern.test(testCase.pattern) != testCase.result) {
        console.log(testCase.pattern + ' ' + testCase.result);
      }
    }
  }

  onSubmit(form: NgForm) {
    //todo może jednak zrobić to reaktywnie
    //todo zrób ten sprypt do generowania 10kk ludzi
    console.log(form.value);
    console.log(form);
  }
}
