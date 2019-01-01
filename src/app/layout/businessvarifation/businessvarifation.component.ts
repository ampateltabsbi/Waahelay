import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-businessvarifation',
  templateUrl: './businessvarifation.component.html',
  styleUrls: ['./businessvarifation.component.scss']
})
export class BusinessvarifationComponent implements OnInit {
  public emailAddress: string;
  constructor() {
    this.emailAddress = 'admin@waahelay.com';
  }

  ngOnInit() {}
}
