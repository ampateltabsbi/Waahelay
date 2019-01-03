import { AfterViewChecked, Component, OnInit, Input,
    ViewChild } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
    }
}
