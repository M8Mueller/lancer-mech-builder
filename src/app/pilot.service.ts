import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  pilot = {
    licenses: { 
      'GMS': 1,
      'Tokugawa': 1
    },
    talents: {},
    core: {
      hp: 27,
      hull: 1,
      agility: 0,
      systems: 0,
      engineering: 0,
      sp: 0,
      mounts: [],
      bonus: {}
    }
  }

  getLevel() {
    var level = -1;

    for (var license in this.pilot.licenses)
      level += this.pilot.licenses[license];

    return level;
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

  getCore() {
    return this.pilot.core;
  }

  constructor() { }
}
