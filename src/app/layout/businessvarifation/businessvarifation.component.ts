import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-businessvarifation',
  templateUrl: './businessvarifation.component.html',
  styleUrls: ['./businessvarifation.component.scss'],
  animations: [routerTransition()]
})
export class BusinessvarifationComponent implements OnInit {
  public emailAddress: string;
  public inboxMessage: boolean;
  public inboxSMS: boolean;
  public inboxPayment: boolean;
  constructor() {
    this.emailAddress = 'admin@waahelay.com';
    this.inboxMessage = true;
    this.inboxSMS = false;
    this.inboxPayment = false;
  }

  ngOnInit() {}

  onInboxMessageClick() {
    this.inboxMessage = false;
    this.inboxPayment = false;
    this.inboxSMS = true;
  }

  onInboxSMSClick() {
    this.inboxMessage = false;
    this.inboxSMS = false;
    this.inboxPayment = true;
  }

  onPaymentClick() {
    localStorage.setItem('IsAdminTabs', 'true');
  }
}
