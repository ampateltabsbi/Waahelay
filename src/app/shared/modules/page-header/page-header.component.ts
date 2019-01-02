import { AfterViewChecked, Component, OnInit, Input, 
    ViewChild } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, AfterViewChecked {
    @Input() heading: string;
    @Input() icon: string;
    public isAdminTabs: false;
    public isBreadcrumb: false;

    prospectId: number;
    selectedTab: String;

    @ViewChild('tabs')
    private tabs: NgbTabset;

    constructor(private route: ActivatedRoute) {
        debugger;
        this.route.data.subscribe(d=>{
            this.selectedTab = d.name;
        });

        if (localStorage.getItem('IsAdminTabs') === 'true') {
            this.isAdminTabs = true;
            this.isBreadcrumb = false;
        }
        else{
            this.isAdminTabs = false;
            this.isBreadcrumb = true;
        }
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.prospectId = +params['prospectid'];
            }
        );
    }

    ngAfterViewChecked(): void {
        if(this.tabs) {
            this.tabs.select(this.selectedTab);
        }
    } 

    onTabChange($event: NgbTabChangeEvent) {
        let routes = {
            details: `/prospect/${this.prospectId}/details`,
            appointments: `/prospect/${this.prospectId}/appointments`,
            followups: `/prospect/${this.prospectId}/followups`,
            notes: `/prospect/${this.prospectId}/notes`,
            dials: `/prospect/${this.prospectId}/dials`,
        };
    
        this.router.navigateByUrl(routes[$event.nextId]);
    }
}
