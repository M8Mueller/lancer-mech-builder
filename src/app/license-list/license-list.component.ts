import { Component, OnInit } from '@angular/core';

import { PilotService } from '../pilot.service';
import { LicenseService } from '../license.service';
import { WeaponService } from '../weapon.service';

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
      name: 'Harrison Armory',
      licenses: [
        'Tokugawa'
      ]
    }
  ];

  pilotLicenses: any;

  unlocks = {};
  weapons = {};

  active = 0;

  setActive(index) {
    this.active = index;
  }

  // PilotService Wrappers
  addLicense(license){
    this.pilotLicenses[license] = this.pilotService.addLicense(license);
    this.unlocks[license] = this.getUnlocks(license, this.pilotLicenses[license]);
    if (this.unlocks[license].weapons) {
      this.unlocks[license].weapons.forEach((weapon) => {
        this.weapons[weapon] = this.getWeapon(weapon);
      });
    }
  }

  removeLicense(license){
    this.pilotLicenses[license] = this.pilotService.removeLicense(license);
    this.unlocks[license] = this.getUnlocks(license, this.pilotLicenses[license]);
  }

  // LicenseService Wrappers
  getUnlocks(license, rank) {
    return this.licenseService.getUnlocks(license, rank);
  }

  // WeaponService Wrappers
  getWeapon(weapon) {
    return this.weaponService.getWeapon(weapon);
  }

  constructor(private pilotService: PilotService, private licenseService: LicenseService, private weaponService: WeaponService) { }

  ngOnInit() {
    this.pilotLicenses = this.pilotService.getLicenses();
    console.log(this);

    for (var license in this.pilotLicenses) {
      this.unlocks[license] = this.getUnlocks(license, this.pilotLicenses[license]);
      if (this.unlocks[license].weapons) {
        this.unlocks[license].weapons.forEach((weapon) => {
          this.weapons[weapon] = this.getWeapon(weapon);
        });
      }
    }
  }

}
