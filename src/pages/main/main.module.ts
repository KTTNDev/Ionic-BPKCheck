import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { MainPage } from './main';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    ChartsModule,
  ],
})
export class MainPageModule { }
