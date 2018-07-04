import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-picker',
  templateUrl: './shell-picker.component.html',
  styleUrls: ['./shell-picker.component.css']
})
export class ShellPickerComponent implements OnInit {

  active: number = 0;

  activate(i) {
    this.active = i;
  }

  shells: any[] = [
    {
      name: 'Everest',
      description: 'A basic all-rounder.',
      corp: 'GMS',
      license: 'GMS',
      stats: ['+1 any', '-1 any'],
      mounts: ['Flex', 'Main', 'Heavy'],
      sp: 5
    },
    {
      name: 'Tokugawa',
      description: 'For pilots who like to run hot.',
      corp: 'Harrison Armory',
      license: 'Tokugawa I',
      stats: ['+1 ENG', '+1 HEAT CAP'],
      mounts: ['Flex', 'Main', 'Main'],
      sp: 5
    },
    {
      name: 'Vlad',
      description: 'For the impaler in all of us.',
      corp: 'IPS-N',
      license: 'Vlad I',
      stats: ['+1 HULL', '-1 ENG'],
      mounts: ['Flex', 'Flex', 'Heavy'],
      sp: 5
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
