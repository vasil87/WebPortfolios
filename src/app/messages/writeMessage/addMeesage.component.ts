import { MessagesService } from './../../core/providers/messages/messages.service';
import { AppComponent } from './../../app.component';
import { AuthenthicationService } from './../../core/providers/authentication/authenthication.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '../../models/message-model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './AddMeesage.component.html',
  styleUrls: ['./AddMeesage.component.css']
})
export class AddMeesageComponent implements OnInit, OnDestroy {
  senderEmail: string;
  sub: Subscription;
  public receiverEmail: any;
  message: Message;
  messageForm: FormGroup;

  toastr;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private authServ: AuthenthicationService
    , private appComp: AppComponent, private messsageService: MessagesService) {
    this.toastr = appComp.toastr;
    this.message = new Message({});
  }

  ngOnInit() {
    this.senderEmail = this.authServ.currentUserEmail;
    this.sub = this.route.params.subscribe(params => {
      this.receiverEmail = params['email'];
      this.message.to = this.receiverEmail;
    });
    this.messageForm = this.fb.group({
      'text': [this.message.text, Validators.compose([Validators.required, Validators.minLength(15)])]
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  sendMessage(form) {
    const componenet = this;
    this.message.from = this.senderEmail;
    this.message.text = form.text;
    this.messsageService.addMessage(this.message)
      .then(() => {
        componenet.toastr.success('You ve successfully sent message to ' + this.message.to);
      })
      .catch((err) => {
        componenet.toastr.error('Please try again later');
      });
  }
}