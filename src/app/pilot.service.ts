import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  pilot = {
    licenses: { 
      'GMS': 1,
      'Tokugawa': 0
    },
    talents: {},
    core: {
      hp: 0,
      hull: 0,
      agility: 0,
      systems: 0,
      engineering: 0,
      sp: 0,
      mounts: []
    }
  }

  getLicenses() {
    return this.pilot.licenses;
  }

  addLicense(license) {
    if (this.pilot.licenses[license] < 3)
      this.pilot.licenses[license] += 1;

    return this.pilot.licenses[license];
  }

  removeLicense(license) {
    if (this.pilot.licenses[license] > 0)
      this.pilot.licenses[license] -= 1;

    return this.pilot.licenses[license];
  }

  constructor() { }
}
