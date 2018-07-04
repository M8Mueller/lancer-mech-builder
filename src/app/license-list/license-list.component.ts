import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.css']
})
export class LicenseListComponent implements OnInit {

  licenses: any[] = [
    'GMS', 'Tokugawa I', 'Tokugawa II', 'Dusk Wing I'
  ]

  spliceLicense(i) {
    this.licenses.splice(i, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
