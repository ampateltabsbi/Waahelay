
import { AfterViewChecked, Component, OnInit, Input,
  ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { APIService } from './../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BusineesDetail } from '../../model/addbusinessdetail';
import { ToastrManager } from 'ng6-toastr-notifications';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './../layout.component';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-additionalbusinessdetail',
  templateUrl: './additionalbusinessdetail.component.html',
  styleUrls: ['./additionalbusinessdetail.component.scss']
})
export class AdditionalbusinessdetailComponent implements OnInit, AfterViewChecked {

  prospectId: number;
  public selectedTab: string;

   @ViewChild('tabs')
   private tabs: NgbTabset;

  constructor(private route: ActivatedRoute, private router: Router) {
        this.route.data.subscribe(d => {
            this.selectedTab = d.name;
        });
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.prospectId = +params['prospectid'];
            }
        );
    }

    ngAfterViewChecked(): void {
        if (this.tabs) {
            this.tabs.select(this.selectedTab);
        }
    }

    onSpecialist() {
        this.router.navigate(['additionalbusinessdetail/businessprofile'], { skipLocationChange: true});
      }

      onBusinessHours() {
        this.router.navigate(['additionalbusinessdetail/businessreview'], { skipLocationChange: true});
      }

    onTabChange($event: NgbTabChangeEvent) {
        const routes = {
            category: 'category',
            addbusinessdetail: 'addbusinessdetail',
            followups: `/prospect/${this.prospectId}/followups`,
            notes: `/prospect/${this.prospectId}/notes`,
            dials: `/prospect/${this.prospectId}/dials`,
        };

        this.router.navigateByUrl(routes[$event.nextId]);
    }

}
