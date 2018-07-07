import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ShellPickerComponent } from './shell-picker/shell-picker.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { WeaponPickerComponent } from './weapon-picker/weapon-picker.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { MechBuilderComponent } from './mech-builder/mech-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellPickerComponent,
    LicenseListComponent,
    WeaponPickerComponent,
    ItemCardComponent,
    MechBuilderComponent
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
