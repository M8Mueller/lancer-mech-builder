import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ShellPickerComponent } from './shell-picker/shell-picker.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { WeaponPickerComponent } from './weapon-picker/weapon-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellPickerComponent,
    LicenseListComponent,
    WeaponPickerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
