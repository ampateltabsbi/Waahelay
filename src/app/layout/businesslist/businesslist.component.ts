import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BusineesDetail } from '../../model/addbusinessdetail';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-businesslist',
  templateUrl: './businesslist.component.html',
  styleUrls: ['./businesslist.component.scss'],
  animations: [routerTransition()]
})

export class BusinesslistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}


