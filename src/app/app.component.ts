import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 
 public itemsRef;
  constructor(db: AngularFireDatabase) {

 this.itemsRef = db.list('meterData');
this.itemsRef.snapshotChanges(['child_added'])
  .subscribe(actions => {
    actions.forEach(action => {
      console.log(action.type);
      console.log(action.key);
      console.log(action.payload.val());
    });
  });
  
  for (let i = 0; i < this.lineChartLabels.length; i++) {
      this.lineChartLabels[i] = i;
    }
  for (let i = 0; i < this.lineChartData[0].data.length; i++) {
      this.lineChartData[0].data[i] = 0.00;
    }

  }


  title = 'app';
  public chart;

    // lineChart
  public lineChartData:Array<any> = [
    {data: new Array(5*60), label: 'Power last Hr'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = new Array(5*60); 
  

  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointRadius: 1,
      pointBorderColor: 'rgba(148,159,177,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    // { // dark grey
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0.2)',
    //   borderColor: 'rgba(148,159,177,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }

  	// _lineChartData[0].data.shift();
  	// _lineChartData[0].data.push( Math.floor((Math.random() * 100) + 1));

    this.lineChartData = _lineChartData;
  }

  public addOne():void {
  	let _lineChartData = this.lineChartData;
  	_lineChartData[0].data.shift();
  	_lineChartData[0].data.push( Math.floor((Math.random() * 100) + 1));

  	this.lineChartData = _lineChartData;

    this.lineChartData = this.lineChartData.slice();
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
