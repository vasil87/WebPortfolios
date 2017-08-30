import { Portfolio } from './../models/portfolio-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-portfolio-form',
  templateUrl: './my-portfolio-form.component.html',
  styleUrls: ['./my-portfolio-form.component.css']
})
export class MyPortfolioFormComponent implements OnInit {

  portfolio: Portfolio;
  rForm: FormGroup;
  firstName: string;
  lastName: string;
  imgUrl: string;
  age: number;
  profession: string;
  workingExperience: number;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.rForm = this.fb.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'imgUrl': [null, Validators.compose([Validators.required, Validators.pattern('https?://.+')])],
      'age': [null, Validators.compose([Validators.required, Validators.pattern('^([1-9]|[0-6][0-9])$')])],
      'profession': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'workingExperience': [null, Validators.compose([Validators.required, Validators.pattern('^([1-9]|[0-6][0-9])$')])]
    });
  }

  addPortfolio(portfolio) {
    this.firstName = portfolio.firstName;
    
  }

  ngOnInit() {
  }

}
