import { Component, OnInit, Injectable, Pipe } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Categorydescription } from './../../model/categorydescription';
import { Categorytype } from './../../model/categorytype';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-categorydescription',
  templateUrl: './categorydescription.component.html',
  styleUrls: ['./categorydescription.component.scss'],
  animations: [routerTransition()]
})
export class CategorydescriptionComponent implements OnInit {
  categorydescription: Categorydescription[] = [];
  categorytype: Categorytype[] = [];
  submitType = 'Save';
  selectedRow: number;

  totalRec: number;
  page = 1;

  public searchString: string;

  constructor(private apiService: APIService, private router: Router, public toastr: ToastrManager
  ) {
    this.apiService.selectedModel = Categorydescription;
    this.bindAllCategorydescription();
    this.bindActiveCategoryType();
  }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess() {
    this.toastr.successToastr('Record Saved Successfully.', 'Success!');
  }

  onSubmit(categorydescriptionForm: NgForm) {
    if (categorydescriptionForm.value.ID === 0) {
      this.apiService
        .addService(categorydescriptionForm.value, 'CategoryDescriptions')
        .subscribe(
          result => {
            this.resetForm();
            this.bindAllCategorydescription();
            this.showSuccess();
          },
          err => {
            console.log(err);
          }
        );
    } else {
      this.apiService.updateService(categorydescriptionForm.value, categorydescriptionForm.value.ID, 'CategoryDescriptions').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategorydescription();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(categorydescriptionForm?: NgForm) {
    if (categorydescriptionForm != null) {
      categorydescriptionForm.reset();
      this.apiService.selectedModel = [];
    }
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      CategoryTypeID: 0,
      IsActive: false,
    };
    this.submitType = 'Save';
  }

  editCategorydescription(categorydescriptionId: number): void {
    this.submitType = 'Update';
    this.selectedRow = categorydescriptionId;
    this.apiService.selectedModel = new Categorydescription();
    const tempCategoryType =  Object.assign({}, this.categorydescription.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCategoryType[0]);
    this.submitType = 'Update';
  }

  bindAllCategorydescription() {
    this.apiService
      .getService('CategoryDescriptions')
      .subscribe((data: Categorydescription[]) => {

      debugger;
        this.categorydescription = data;
        this.totalRec = this.categorydescription.length;
        console.log(this.totalRec);
        console.log(this.page);
      });
  }

  bindActiveCategoryType() {
    this.apiService.getService('CategoryTypes').subscribe((data: Categorytype[]) => {
      const filterData = data.filter(x => x.IsActive === true);
      this.categorytype = filterData;
    });
  }
}
