import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ShellPickerComponent } from './shell-picker/shell-picker.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { WeaponPickerComponent } from './weapon-picker/weapon-picker.component';
import { MechBuilderComponent } from './mech-builder/mech-builder.component';

import { PilotService } from './pilot.service';

@NgModule({
  declarations: [
    AppComponent,
    ShellPickerComponent,
    LicenseListComponent,
    WeaponPickerComponent,
    MechBuilderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    UiModule
  ],
  providers: [PilotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
