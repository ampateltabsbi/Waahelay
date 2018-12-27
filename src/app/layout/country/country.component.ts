
import { Component, OnInit, Injectable, Pipe } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CountryMaster } from '../../model/country';
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  animations: [routerTransition()]
})
export class CountryComponent implements OnInit {

  country: CountryMaster[] = [];
  submitType = 'Save';
  selectedRow: number;

  totalRec: number;
  page = 1;

  public searchString: string;

  constructor(private apiService: APIService, private router: Router, public toastr: ToastrManager) {
    this.apiService.selectedModel = this.country;
    this.bindAllCountry();
  }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess() {
    this.toastr.successToastr('Record Saved Successfully.', 'Success!');
  }

  onSubmit(countryForm: NgForm) {
    if (countryForm.value.ID === 0) {
      this.apiService.addService(countryForm.value, 'CountryMasters').subscribe(
        result => {
          this.resetForm();
          this.bindAllCountry();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(countryForm.value, countryForm.value.ID, 'CountryMasters').subscribe(
        result => {
          this.resetForm();
          this.bindAllCountry();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(countryForm?: NgForm) {
    if (countryForm != null) {
      countryForm.reset();
      this.apiService.selectedModel = [];
    }
    this.apiService.selectedModel = {
      CountryName: '',
      ID: 0,
      IsActive: false,
    };
    this.submitType = 'Save';
  }

  editCountry(countryId: number): void {
    this.selectedRow = countryId;
    this.apiService.selectedModel = new CountryMaster();
    const tempCountry =  Object.assign({}, this.country.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCountry[0]);
    this.submitType = 'Update';
  }

  bindAllCountry() {
    this.apiService.getService('CountryMasters').subscribe((data: CountryMaster[]) => {
      this.country = data;
      this.totalRec = this.country.length;
      console.log(this.totalRec);
      console.log(this.page);
    });
  }
}
