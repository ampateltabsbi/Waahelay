import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BusineesDetail } from '../../model/addbusinessdetail';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-addbusinessdetail',
  templateUrl: './addbusinessdetail.component.html',
  styleUrls: ['./addbusinessdetail.component.scss'],
  animations: [routerTransition()]
})
export class AddbusinessdetailComponent implements OnInit {

  addbusinessdetail: BusineesDetail[] = [];
  submitType = 'Save';
  selectedRow: number;
  totalRec: number;
  page = 1;

  public searchString: string;

  constructor(private apiService: APIService, private router: Router, public toastr: ToastrManager) {
    this.apiService.selectedModel = this.addbusinessdetail;
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(addbusinessdetailForm?: NgForm) {
    if (addbusinessdetailForm != null) {
      addbusinessdetailForm.reset();
      this.apiService.selectedModel = [];
    }
    this.apiService.selectedModel = {
      BusinessName: '',
      ID: 0,
      BusinessAddress1: '',
      BusinessAddress2: '',
      CityID: 0,
      ContryID: 0,
      StateID: 0,
      PostCode: '',
      Phone: '',
      Email: '',
      Website: '',
      EmailVerified: false,
      PhoneVerified: false,
      AdditionalDetails: '',
      UserID: 0,
    };
    this.submitType = 'Save';
  }
}
