import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StateMaster } from './../../model/state';
import { CountryMaster } from './../../model/country';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  animations: [routerTransition()]
})
export class StateComponent implements OnInit {
  state: StateMaster[] = [];
  country: CountryMaster[] = [];
  submitType = 'Save';
  selectedRow: number;

  totalRec: number;
  page = 1;

  public searchString: string;

  constructor(private apiService: APIService, private router: Router, public toastr: ToastrManager) {
    this.apiService.selectedModel = StateMaster;
    this.bindAllState();
    this.bindActiveCountry();
  }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess() {
    this.toastr.successToastr('Record Saved Successfully.', 'Success!');
  }

  onSubmit(stateForm: NgForm) {
    if (stateForm.value.ID === 0) {
      this.apiService.addService(stateForm.value, 'StateMasters').subscribe(
        result => {
          this.resetForm();
          this.bindAllState();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(stateForm.value, stateForm.value.ID, 'StateMasters').subscribe(
        result => {
          this.resetForm();
          this.bindAllState();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(stateForm?: NgForm) {
    if (stateForm != null) {
      stateForm.reset();
      this.apiService.selectedModel = [];
    }
    this.apiService.selectedModel = {
      StateName: '',
      ID: 0,
      CountryID: 0,
      IsActive: false,
    };
    this.submitType = 'Save';
  }

  editState(stateId: number): void {
    this.selectedRow = stateId;
    this.apiService.selectedModel = new StateMaster();
    const tempState =  Object.assign({}, this.state.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempState[0]);
    this.submitType = 'Update';
  }

  bindAllState() {
    this.apiService.getService('StateMasters').subscribe((data: StateMaster[]) => {
      this.state = data;
      this.totalRec = this.state.length;
      console.log(this.totalRec);
      console.log(this.page);
    });
  }

  bindActiveCountry() {
    this.apiService.getService('CountryMasters').subscribe((data: CountryMaster[]) => {
      const filterData = data.filter(x => x.IsActive === true);
      this.country = filterData;
    });
  }
}
