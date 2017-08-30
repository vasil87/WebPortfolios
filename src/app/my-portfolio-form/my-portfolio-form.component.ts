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
  name: string;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.rForm = this.fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(500)])],
      'portfolio.lastName': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
      // 'validate' : ''
    });
  }

  addPortfolio(portfolio) {
    this.name = portfolio.firstName;
  }

  ngOnInit() {
  }

}
