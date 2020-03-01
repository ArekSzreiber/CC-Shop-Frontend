import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('form', {static: false}) checkoutForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    //todo może jednak zrobić to reaktywnie
    //todo zrób ten sprypt do generowania 10kk ludzi
    console.log(form.value);
    console.log(form);
  }
}
