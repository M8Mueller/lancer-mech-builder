import { Component, OnInit } from '@angular/core';

import { PilotService } from '../pilot.service';
import { LicenseService } from '../license.service';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.css']
})
export class LicenseListComponent implements OnInit {

  corps = [
    { 
      name: 'GMS',
      licenses: [
        'GMS'
      ] 
    },
    {
      name: 'HA',
      licenses: [
        'Tokugawa'
      ]
    }
  ];

  pilotLicenses: any;

  unlocks = {};

  // PilotService Wrappers
  addLicense(license){
    this.pilotLicenses[license] = this.pilotService.addLicense(license);
    this.unlocks[license] = this.getUnlocks(license, this.pilotLicenses[license]);
  }

  removeLicense(license){
    this.pilotLicenses[license] = this.pilotService.removeLicense(license);
    this.unlocks[license] = this.getUnlocks(license, this.pilotLicenses[license]);
  }

  // LicenseService Wrappers
  getUnlocks(license, rank) {
    return this.licenseService.getUnlocks(license, rank);
  }

  constructor(private pilotService: PilotService, private licenseService: LicenseService) { }

  ngOnInit() {
    this.pilotLicenses = this.pilotService.getLicenses();
    for (var license in this.pilotLicenses) {
      this.unlocks[license] = this.getUnlocks(license, this.pilotLicenses[license]);
    }
  }

}
