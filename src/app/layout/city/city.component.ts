
import { Component, OnInit, Injectable, Pipe } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CityMaster } from '../../model/citymaster';
import { StateMaster } from '../../model/state';
import { CountryMaster } from '../../model/country';
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  cityMaster: CityMaster[] = [];
  countryMaster: CountryMaster[] = [];
  stateMaster: StateMaster[] = [];
  selectedCountry: CountryMaster = new CountryMaster();
  selectedState: StateMaster[] = [];

  submitType = 'Save';
  selectedRow: number;

  totalRec: number;
  page = 1;

  public searchString: string;
  constructor(private apiService: APIService, private router: Router, public toastr: ToastrManager) {
    this.apiService.selectedModel = CityMaster;
    this.bindAllCountry();
    this.bindAllCity();
  }

  ngOnInit() {
    this.resetForm();
    this.bindAllStates();
  }

  showSuccess() {
    this.toastr.successToastr('Record Saved Successfully.', 'Success!');
  }

  bindAllCity() {
    this.apiService.getService('CityMasters').subscribe((data: CityMaster[]) => {
      debugger;
      this.cityMaster = data;
      this.totalRec = this.cityMaster.length;
      console.log(this.totalRec);
      console.log(this.page);
    });
  }

  bindAllCountry() {
    this.apiService.getService('CountryMasters').subscribe((data: CountryMaster[]) => {
      this.countryMaster = data;
    });
  }

  bindAllStates() {
    this.apiService.getService('StateMasters').subscribe((data: StateMaster[]) => {
      this.selectedState = data;
    });
  }

  onSelectCountry(countryid) {
    if (countryid !== '0: undefined') {
    this.bindStateByCountryId(countryid);
    } else {
      this.stateMaster = [];
    }
  }

  bindStateByCountryId(Id) {
    this.apiService.getModelListById('StateMasters', Id, 'GetStateByCountryId').subscribe((data: StateMaster[]) => {
      this.stateMaster = data;
    });
  }

  resetForm(cityForm?: NgForm) {
    if (cityForm != null) {
      cityForm.reset();
      this.apiService.selectedModel = [];
    }
    this.apiService.selectedModel = {
      CityName: '',
      ID: 0,
      StateID: 0,
      IsActive: false,
      CountryID: false,
    };
    this.submitType = 'Save';
  }
  editCityMaster(cityId: number): void {
    debugger;
    this.selectedRow = cityId;
    this.apiService.selectedModel = new CityMaster();
    const tempCityMaster =  Object.assign({}, this.cityMaster.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCityMaster[0]);
    this.selectedState = this.selectedState.filter(t => t.ID === tempCityMaster[0].StateID);
    this.selectedCountry = this.countryMaster.filter(t => t.ID === this.selectedState[0].CountryID)[0];
    this.onSelectCountry(this.selectedCountry.ID);
    this.submitType = 'Update';
  }
  onSubmit(cityForm: NgForm) {
    if (cityForm.value.ID === 0) {
      this.apiService.addService(cityForm.value, 'CityMasters').subscribe(
        result => {
          this.resetForm();
          this.bindAllCity();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(cityForm.value, cityForm.value.ID, 'CityMasters').subscribe(
        result => {
          this.resetForm();
          this.bindAllCity();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
