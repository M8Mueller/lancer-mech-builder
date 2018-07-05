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
    var license = this.shells[i].license;
    if (!this.getLicense(license)) {
      this.addLicense(license);
      console.log(this.licenses);
    }
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
      sp: 6
    },
    {
      name: 'Vlad',
      description: 'For the impaler in all of us.',
      corp: 'IPS-N',
      license: 'Vlad I',
      stats: ['+1 HULL', '-1 ENG'],
      mounts: ['Flex', 'Flex', 'Heavy'],
      sp: 6
    }
  ]

  licenses: any[] = [
    'GMS', 'Tokugawa I', 'Tokugawa II', 'Dusk Wing I'
  ]

  addLicense(license) {
    this.licenses.push(license);
  }

  getLicense(license) {
    return this.licenses.indexOf(license) > -1;
  }

  constructor() { }

  ngOnInit() {
  }

}
