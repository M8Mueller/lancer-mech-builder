import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  weapons = {
    'Type I MC-P': {
      name: 'Type I MC-P',
      mount: 'Aux',
      type: 'CQB',
      range: 10,
      damage: '1d3 Kinetic',
      corp: 'GMS',
      license: 'GMS',
      rank: 1
    }, 
    'Type I MC-TP': {
      name: 'Type I MC-TP',
      mount: 'Aux',
      type: 'CQB',
      range: 10,
      damage: '1d3 Energy',
      corp: 'GMS',
      license: 'GMS',
      rank: 1
    }, 
    'Type I MC-BR': {
      name: 'Type I MC-BR',
      mount: 'Main',
      type: 'Rifle',
      range: 18,
      tags: ['AP','Unreliable'],
      damage: '1d6+1 Kinetic',
      corp: 'GMS',
      license: 'GMS',
      rank: 1
    }, 
    'Type II MC-HB': {
      name: 'Type II MC-HB',
      mount: 'Heavy',
      type: 'Melee',
      range: 'Reach',
      damage: '2d6 Kinetic',
      corp: 'GMS',
      license: 'GMS',
      rank: 1
    }
  }

  getWeapon(weapon) {
    return this.weapons[weapon] || null;
  }

  getWeapons() {
    return this.weapons;    
  }

  getAvailableWeapons(licenses) {
    var availableWeapons = [];
    for (var weap in this.weapons) {
      var weapon = this.weapons[weap];
      if (licenses[weapon.license] >= weapon.rank) {
        availableWeapons.push(weapon);
      }
    }

    return availableWeapons;
  }

  constructor() { }
}
