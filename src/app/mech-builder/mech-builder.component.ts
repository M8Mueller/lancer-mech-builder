import { Component, OnInit } from '@angular/core';

import { PilotService } from '../pilot.service';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-mech-builder',
  templateUrl: './mech-builder.component.html',
  styleUrls: ['./mech-builder.component.css']
})
export class MechBuilderComponent implements OnInit {
  level: number;

  core: any;
  shell: any;

  activeMount: any;

  showShells = false;
  availableShells = [
    {
      name: 'Everest',
      size: 1,
      armor: 0,
      corp: 'GMS',
      license: 'GMS',
      mounts: [{ type: 'Flex', weapon: null }, { type: 'Main', weapon: null }, { type: 'Heavy', weapon: null }],
      sp: 5
    },
    {
      name: 'Tokugawa',
      size: 1,
      armor: 0,
      corp: 'Harrison Armory',
      license: 'Tokugawa',
      rank: 1,
      engineering: 1,
      heatCap: 1,
      mounts: [{ type: 'Flex', weapon: null }, { type: 'Main', weapon: null }, { type: 'Main', weapon: null }],
      sp: 6
    },
    {
      name: 'Vlad',
      size: 1,
      armor: 0,
      corp: 'IPS-N',
      license: 'Vlad',
      rank: 1,
      hull: 1,
      engineering: -1,
      mounts: [{ type: 'Flex', weapon: null }, { type: 'Flex', weapon: null }, { type: 'Heavy', weapon: null }],
      sp: 6
    }
  ];

  showWeapons = false;
  availableWeapons = [
    {
      name: 'Type I MC-P',
      mount: 'Aux',
      type: 'CQB',
      range: 10,
      damage: '1d3 Kinetic',
      corp: 'GMS',
      license: 'GMS',
      rank: 1
    }, 
    {
      name: 'Type I MC-TP',
      mount: 'Aux',
      type: 'CQB',
      range: 10,
      damage: '1d3 Energy',
      corp: 'GMS',
      license: 'GMS',
      rank: 1
    }, 
    {
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
    {
      name:'Type II MC-HB',
      mount: 'Heavy',
      type: 'Melee',
      range: 'Reach',
      damage: '2d6 Kinetic',
      corp: 'GMS',
      license: 'GMS',
      rank: 1
    }
  ];

  addLevel() {
    this.level++;
    this.core.hp += 3;
    this.core.targeting = Math.min(Math.floor(this.level / 2), 6);
    this.core.sp = Math.floor(this.level / 3);
    if ((this.level) % 5 === 0) {
      this.core.mounts.push({ type: 'Core', weapon: null });
    }
  }

  removeLevel() {
    if (this.level > 0 && this.level > this.getTotalCore()) {
      this.level--;
      this.core.hp -= 3;
      this.core.targeting = Math.min(Math.floor(this.level / 2), 6);
      this.core.sp = Math.floor(this.level / 3);
      if ((this.level + 1) % 5 === 0) {
        this.core.mounts.pop();
      }
    }
  }

  addCore(stat) {
    if (this.getTotalCore() < this.level && this.core[stat] < 6){
      this.core[stat]++;
      if (stat === 'hull')
        this.core.hp += 4;
    }
  }

  removeCore(stat) {
    if (this.core[stat] > 0) {
      this.core[stat]--;
      if (stat === 'hull')
        this.core.hp -= 4; 
    }
  }

  resetCore(stat) {
    this.core[stat] = 0;
    if (stat === 'hull')
      this.core.hp = this.level * 3;
  }

  getTotalCore() {
    return this.core.hull + this.core.agility + this.core.systems + this.core.engineering;
  }

  browseShells() {
    this.showShells = !this.showShells;
    this.activeMount = null;
    this.showWeapons = false;
  }

  setShell(shell) {
    this.shell = shell;
  }

  browseWeapons(mount, index) {
    if (this.activeMount && this.activeMount.index !== index) {
      this.showWeapons = true;
    } else {
      this.showWeapons = !this.showWeapons;
    }

    this.activeMount = { type: mount.type, weapon: mount.weapon, index: index };
    this.showShells = false;
  }

  setWeapon(weapon, activeMount) {
    if (activeMount.type === 'Core') {

    } else {
      this.shell.mounts[activeMount.index].weapon = weapon;
    }
  }

  canMount(mount, weaponMount) {
    if (mount === 'Core') return true;
    if (mount === 'Flex') return (weaponMount === 'Main' || weaponMount === 'Aux');
    return (mount === weaponMount);
  }

  constructor(private pilotService: PilotService, private weaponService: WeaponService) {

  }

  ngOnInit() {
    this.core = this.pilotService.getCore();
    this.level = this.pilotService.getLevel();
    this.shell = this.availableShells[0];
  }

}
