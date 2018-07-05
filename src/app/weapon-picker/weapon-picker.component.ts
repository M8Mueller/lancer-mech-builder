import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon-picker',
  templateUrl: './weapon-picker.component.html',
  styleUrls: ['./weapon-picker.component.css']
})
export class WeaponPickerComponent implements OnInit {

  active: number = 0;

  activate(i) {
    this.active = i;
  }

  weapons: any[] = [
    {
      name: 'Type I MC-BR',
      description: 'A basic battle rifle.',
      corp: 'GMS',
      license: 'GMS',
      mount: 'Main',
      type: 'Rifle',
      range: 18,
      damage: ['1d6+1 Kinetic'],
      tags: ['AP','Unreliable']
    },
    {
      name: 'Type II MC-HB',
      description: 'A basic heavy blade.',
      corp: 'GMS',
      license: 'GMS',
      mount: 'Heavy',
      type: 'Melee',
      range: 'Reach',
      damage: ['2d6 Kinetic']
    },
    {
      name: 'Type I MC-P',
      description: 'A basic pistol.',
      corp: 'GMS',
      license: 'GMS',
      mount: 'Auxiliary',
      type: 'CQB',
      range: '10',
      damage: ['1d3 Kinetic']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
