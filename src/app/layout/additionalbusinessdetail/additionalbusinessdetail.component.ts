
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
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-additionalbusinessdetail',
  templateUrl: './additionalbusinessdetail.component.html',
  styleUrls: ['./additionalbusinessdetail.component.scss']
})
export class AdditionalbusinessdetailComponent implements OnInit, AfterViewChecked {

  constructor(private route: ActivatedRoute, private router: Router) {
        this.route.data.subscribe(d => {
            this.selectedTab = d.name;
        });
    }

  prospectId: number;
  public selectedTab: string;

   @ViewChild('tabs')
   private tabs: NgbTabset;

      zoom = 8;

      // initial center position for the map
      lat = 52.573921;
      lng = -0.250830;

      markers: marker[] = [
        {
            lat: 52.412811,
            lng: -1.778197,
            label: 'A',
            draggable: true
        },
        {
            lat: -95.712891,
            lng: 37.090240,
            label: 'B',
            draggable: false
        },
        {
            lat: 20.5937,
            lng: 78.9629,
            label: 'C',
            draggable: true
        }
    ];

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

      clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`);
      }

      mapClicked($event: MouseEvent) {
        this.markers.push({
          lat: $event.coords.lat,
          lng: $event.coords.lng,
          draggable: true
        });
      }

      markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
      }
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
