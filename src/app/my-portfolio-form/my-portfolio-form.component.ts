import { AuthenthicationService } from './../core/providers/authentication/authenthication.service';
import { PortfolioService } from './../core/providers/portfolio/portfolio.service';
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

  private currentUserEmail;

  constructor(private fb: FormBuilder, private portfolioService: PortfolioService, private authService: AuthenthicationService) {
    this.createForm();
    this.portfolio = new Portfolio({});
  }

  createForm() {
    this.rForm = this.fb.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'imgUrl': [null, Validators.compose([Validators.required, Validators.pattern('https?://.+')])],
      'age': [null, Validators.compose([Validators.required, Validators.pattern('^([1-9]|[0-6][0-9])$')])],
      'profession': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'workingExperience': [null, Validators.compose([Validators.required, Validators.pattern('^([1-9]|[0-6][0-9])$')])],
      'interests': '',
      'projects': '',
      'languages': '',
      'hobbies': '',
      'additionalInfo': '',
    });
  }

  addPortfolio(rForm) {
    console.log(rForm);
    this.portfolio.email = this.currentUserEmail;
    this.portfolio.firstName = rForm.firstName;
    this.portfolio.lastName = rForm.lastName;
    this.portfolio.imgUrl = rForm.imgUrl;
    this.portfolio.age = rForm.age;
    this.portfolio.profession = rForm.profession;
    this.portfolio.workingExperience = rForm.workingExperience;
    this.portfolio.interests = rForm.interests.split(',');
    this.portfolio.projects = rForm.projects.split(',');
    this.portfolio.languages = rForm.languages.split(',');
    this.portfolio.hobbies = rForm.hobbies.split(',');
    this.portfolio.additionalInfo = rForm.additionalInfo;
    this.portfolioService.addPortfolio(this.portfolio);
     console.log(this.portfolio);
  }

  ngOnInit() {
    this.authService.currentUser
      .subscribe(currentUser => {
        this.currentUserEmail = currentUser.email;
      });
  }

}
