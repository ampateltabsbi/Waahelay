import { Component, OnInit, Injectable, Pipe } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Categorytype } from './../../model/categorytype';
import { Category } from './../../model/Category';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-categorytype',
  templateUrl: './categorytype.component.html',
  styleUrls: ['./categorytype.component.scss'],
  animations: [routerTransition()]
})
export class CategorytypeComponent implements OnInit {
  categorytype: Categorytype[] = [];
  category: Category[] = [];
  submitType = 'Save';
  selectedRow: number;

  totalRec: number;
  page = 1;

  public searchString: string;

  constructor(private apiService: APIService, private router: Router, public toastr: ToastrManager) {
    this.apiService.selectedModel = Categorytype;
    this.bindAllCategorytype();
    this.bindActiveCategory();
  }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess() {
    this.toastr.successToastr('Record Saved Successfully.', 'Success!');
  }

  onSubmit(categorytypeForm: NgForm) {
    if (categorytypeForm.value.ID === 0) {
      this.apiService.addService(categorytypeForm.value, 'CategoryTypes').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategorytype();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(categorytypeForm.value, categorytypeForm.value.ID, 'CategoryTypes').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategorytype();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(categorytypeForm?: NgForm) {
    if (categorytypeForm != null) {
      categorytypeForm.reset();
      this.apiService.selectedModel = [];
    }
    this.apiService.selectedModel = {
      CategoryTypeName: '',
      ID: 0,
      CategoryID: 0,
      IsActive: false,
    };
    this.submitType = 'Save';
  }

  editCategorytype(categorytypeId: number): void {
    this.selectedRow = categorytypeId;
    this.apiService.selectedModel = new Categorytype();
    const tempCategoryType =  Object.assign({}, this.categorytype.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCategoryType[0]);
    this.submitType = 'Update';
  }

  bindAllCategorytype() {
    this.apiService.getService('CategoryTypes').subscribe((data: Categorytype[]) => {
      this.categorytype = data;
      this.totalRec = this.categorytype.length;
      console.log(this.totalRec);
      console.log(this.page);
    });
  }

  bindActiveCategory() {
    this.apiService.getService('Categories').subscribe((data: Category[]) => {
      const filterData = data.filter(x => x.IsActive === true);
      this.category = filterData;
    });
  }
}
