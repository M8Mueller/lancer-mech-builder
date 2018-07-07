import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  licenses = {
    'GMS': {
      1: { 
        shells: ['Everest'],
        weapons: ['Type I MC-P', 'Type I MC-TP', 'Type I MC-K', 'Type I MC-BR', 'Type II MC-HB'] 
      }
    },
    'Tokugawa': { 
      1: {
        shells: ['Tokugawa'],
        systems: ['External Batteries', 'Experimental Heat Sink']
      },
      2: {
        shellSystems: ['Superheated Reactor Feed'],
        weapons: ['Annihilator'],
        systems: ['Supercharger']
      },
      3: {
        coreBonuses: ['+1 accuracy on energy weapon melee'],
        weapons: ['Torch'],
        systems: ['AMATERASU Class AI']
      }
    }
  };

  // Returns an object with consolidated lists of items unlocked by the given rank
  getUnlocks(license, rank) {
    var unlocks = {
      coreBonuses: [],
      shells: [],
      shellSystems: [],
      weapons: [],
      systems: []
    };

    for (var i = 1; i <= rank; i++) {
      var currentRank = this.licenses[license][i];
      if (currentRank.coreBonuses)
        unlocks.coreBonuses = currentRank.coreBonuses;
      if (currentRank.shells)
        unlocks.shells = currentRank.shells;
      if (currentRank.shellSystems)
        unlocks.shellSystems = currentRank.shellSystems;
      if (currentRank.weapons)
        unlocks.weapons = unlocks.weapons.concat(currentRank.weapons);
      if (currentRank.systems)
        unlocks.systems = unlocks.systems.concat(currentRank.systems);
    }

    return unlocks;
  }

  constructor() { }
}
