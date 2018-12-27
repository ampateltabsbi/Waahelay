
import { Component, OnInit, Injectable, Pipe } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CityMaster } from '../../model/citymaster';
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  cityMaster: CityMaster[] = [];
  countryMaster: any;
  stateMaster: any;

  submitType = 'Save';
  selectedRow: number;

  totalRec: number;
  page = 1;

  public searchString: string;
  constructor(private apiService: APIService, private router: Router, public toastr: ToastrManager) {
    debugger;
    this.apiService.selectedModel = CityMaster;
    this.bindAllCity();
  }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.successToastr('Record Saved Successfully.', 'Success!');
  }

  bindAllCity() {
    this.apiService.getService('CityMasters').subscribe((data: CityMaster[]) => {
      this.cityMaster = data;
      this.totalRec = this.cityMaster.length;
      console.log(this.totalRec);
      console.log(this.page);
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
    };
    this.submitType = 'Save';
  }
  editCityMaster(cityId: number): void {
    this.selectedRow = cityId;
    this.apiService.selectedModel = new CityMaster();
    this.submitType = 'Update';
  }

  onSubmit(cityForm: NgForm) {
    debugger;
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
