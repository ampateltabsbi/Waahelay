
import { Component, OnInit, Injectable, Pipe } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { City } from '../../model/city';
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
