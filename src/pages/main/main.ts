import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  private getData: string[];
  private person = new Array(46);
  private Menu: string;
  private labNames: string[] = ['Cholesterol', 'HDL', 'LDL', 'Triglyceride', 'Glucose', 'Creatinine(plus eGFR)', 'Creatinine(SI Unit)', 'BMI', 'BP ตัวบน', 'BP ตัวล่าง','เพิ่ม'];
  private Years: string[] = ['2018','2017','2016','2015'];
  private labDetail: any = [['0', '0', '0','0'], ['0', '0', '0','0'], [ '0', '0', '0','0'], [ '0', '0', '0','0'], ['0', '0', '0','0'], [ '0', '0', '0','0'], [ '0', '0', '0','0'], [ '0', '0', '0','0'], [ '0', '0', '0','0'], [ '0', '0', '0','0'], [ '0', '0', '0','0']];
  private loading = this.loadingCtrl.create({
    content: 'รอสักครู่ ...',
    spinner: 'crescent'
  })

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController) {
    this.Menu = "Info";
  }

  ionViewDidLoad() {
    this.loading.present();
    this.getData = this.navParams.data;
    var Count: number = 0;
    for (var i in this.getData) {
      this.person[Count] = (this.getData[i]);
      Count++;
    }
    this.PushToArr();
    this.loading.dismiss();
  }

  // barChart //
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2018', '2017', '2016', '2015'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartData0: any[] = [
    { data: ['', '', '',''] },
  ];
  public barChartData1: any[] = [
    { data: ['', '', '',''] },
  ];
  public barChartData2: any[] = [
    { data: ['', '', '',''] },
  ];
  public barChartData3: any[] = [
    { data: ['', '', '',''] },
  ];
  public barChartData4: any[] = [
    { data: ['', '', '',''] },
  ];
  public barChartData5: any[] = [
    { data: ['', '', '',''] },
  ];
  public barChartData6: any[] = [
    { data: ['', '', '',''] },
  ];
  public barChartData7: any[] = [
    { data: ['', '', '',''] },
  ];
  public barChartData8: any[] = [
    { data: ['', '', '',''] },
  ];
  public barChartData9: any[] = [
    { data: ['', '', '',''] },
  ];
  public barChartData10: any[] = [
    { data: ['', '', '',''] },
  ];
  events
  public chartHovered(e: any): void {
    console.log(e);
  }
  // end barChart //

  //function
  PushToArr() {
    var count: number = 6;
    for (let index1 = 0; index1 <= 10; index1++) {
      this.labDetail[index1] = [];
      for (let index2 = 0; index2 <= 3; index2++) {
        this.labDetail[index1][index2] = this.person[count];
        count++;
      }
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData0[0].data[i] = this.labDetail[0][i];
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData1[0].data[i] = this.labDetail[1][i];
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData2[0].data[i] = this.labDetail[2][i];
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData3[0].data[i] = this.labDetail[3][i];
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData4[0].data[i] = this.labDetail[4][i];
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData5[0].data[i] = this.labDetail[5][i];
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData6[0].data[i] = this.labDetail[6][i];
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData7[0].data[i] = this.labDetail[7][i];
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData8[0].data[i] = this.labDetail[8][i];
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData9[0].data[i] = this.labDetail[9][i];
    }
    for (let i = 0; i <= 3; i++) {
      this.barChartData10[0].data[i] = this.labDetail[10][i];
    }
  }
}