import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { GoogleProvider } from './../../providers/google/google';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GoogleProvider]
})
export class HomePage {
  persons: Array<any>;
  dataId: string;
  Check: boolean = false;

  private loading = this.loadingCtrl.create({
      content: 'กำลังโหลด ...',
      spinner:'crescent'
  });

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public gDrive: GoogleProvider, public loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'กำลังโหลด ...',
      spinner:'crescent'
    });
    loading.present();
    this.dataId = '1Zx7N9uOHR0313_BGHsAlHDWG3dr7ShN8P6yU9w-MJl4';
    gDrive.load(this.dataId)
      .then((data) => {
        this.persons = data;
      }, (error) => {
        console.log(error);
      });
    loading.dismiss();
  }

  CheckEmployee(EmpID) {
    this.persons.forEach(person => {
      if (person.empid == EmpID) {
        this.Check = true;
        this.navCtrl.push("MainPage", person)
      }
    });
    if (this.Check == false) {
      this.showAlert();
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Not Found!',
      subTitle: 'คุณป้อนรหัสไม่ถูกต้อง ลองใหม่อีกครั้ง',
      buttons: ['OK']
    })
    alert.present();
  }
}
