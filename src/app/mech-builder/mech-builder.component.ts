import { Component, OnInit } from '@angular/core';

import { PilotService } from '../pilot.service';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-mech-builder',
  templateUrl: './mech-builder.component.html',
  styleUrls: ['./mech-builder.component.css']
})
export class MechBuilderComponent implements OnInit {

  private pilotService;

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
      mounts: [{ type: 'Aux', weapon: null, auxWeapon: null }, { type: 'Flex', weapon: null, auxWeapon: null }, { type: 'Heavy', weapon: null }],
      sp: 5
    },
    {
      name: 'Tokugawa',
      size: 1,
      armor: 0,
      corp: 'HA',
      license: 'Tokugawa',
      rank: 1,
      engineering: 1,
      heatCap: 1,
      mounts: [{ type: 'Flex', weapon: null, auxWeapon: null }, { type: 'Main', weapon: null }, { type: 'Main', weapon: null }],
      sp: 6,
      shellSystem: {
        name: 'Superheated Reactor Feed',
        passive: 'While your mech is in the Danger Zone (the last 3 ticks of heat) you deal +1d6 energy damage on the first hit with any attack on your turn.',
        active: {
          name: 'Radiance',
          type: 'Protocol',
          description: 'Choose 1 energy weapon your mech is wielding. If it is a ranged weapon, its range increases by 5, if it is a melee weapon, its reach increases by +1. For the rest of this combat, this weapon also deals +2d6 energy damage and all of its damage becomes AP. However, each time you fire this weapon, you gain +3 heat.'
        }
      }
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
      mounts: [{ type: 'Flex', weapon: null, auxWeapon: null }, { type: 'Flex', weapon: null, auxWeapon: null }, { type: 'Heavy', weapon: null }],
      sp: 6
    }
  ];

  showWeapons = false;
  availableWeapons = [];

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
      this.core.hp = 20 + this.level * 3;
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
    this.showShells = false;
  }

  browseWeapons(mount, index, aux = false) {
    if (this.activeMount && this.activeMount.index === index && this.activeMount.aux === aux) {
      this.showWeapons = false;
      this.activeMount = null;
    } else {
      this.activeMount = { type: mount.type, weapon: mount.weapon, auxWeapon: mount.auxWeapon || null, index: index, aux: aux };
      this.showWeapons = true;
      this.showShells = false;
    }

  }

  canMount(weapon, mount) {
    if (mount.aux && weapon.mount !== 'Aux') return false;
    if (mount.type === 'Core') return true;
    if (mount.type === 'Flex') return (weapon.mount === 'Main' || weapon.mount === 'Aux');
    return (mount.type === weapon.mount);
  }

  mountWeapon(weapon, mount) {
    if (weapon === null || this.canMount(weapon, mount)) { 
      var mountLocation = mount.type === 'Core' ? 'core' : 'shell';
      var mountType = mount.aux ? 'auxWeapon' : 'weapon';

      this[mountLocation].mounts[mount.index][mountType] = weapon;

      if (mount.auxWeapon && (weapon && weapon.mount !== 'Aux')) this[mountLocation].mounts[mount.index].auxWeapon = null;

      this.activeMount = null;
      this.showWeapons = false;
    }
  }


  constructor(pilotService: PilotService, private weaponService: WeaponService) {
    this.pilotService = pilotService;
    this.availableWeapons = this.weaponService.getAvailableWeapons(this.pilotService.getLicenses());
  }

  ngOnInit() {
    this.level = this.pilotService.getLevel();
    this.core = this.pilotService.getCore();
    this.shell = this.availableShells[0];
  }

}
