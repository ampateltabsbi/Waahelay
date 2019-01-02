import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BusineesDetail } from '../../model/addbusinessdetail';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-businessreview',
  templateUrl: './businessreview.component.html',
  styleUrls: ['./businessreview.component.scss'],
  animations: [routerTransition()]
})

export class BusinessreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

