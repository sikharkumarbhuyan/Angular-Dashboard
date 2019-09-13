import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from '../data.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: object;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getUsers().subscribe(data =>{
      this.users = data['data'];
      console.log(this.users);
    });


  }



  Highcharts1 = Highcharts;
  chartOptions1 = {
    chart: {
      backgroundColor: 'transparent',
      type: 'areaspline',
  },
  title: {
      text: ''
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
  },
  xAxis: {
      categories: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
      ],
  },  yAxis: {
    title: {
        text: 'Fruit units'
    }
},
tooltip: {
    shared: true,
    valueSuffix: ' units'
},
credits: {
    enabled: false
},
plotOptions: {
    areaspline: {
        fillOpacity: 0.5,
    }
},
series: [{
    name: 'John',
    data: [3, 4, 3, 7, 4, 10, 12],
}, {
    name: 'Jane',
    data: [1, 6, 4, 3, 3, 5, 4]
}]
  };
  


  Highcharts2 = Highcharts;
  chartOptions2 = {
    chart: {
      backgroundColor: 'transparent',
      type: 'column',
  },
  title: {
      text: ''
  },
  subtitle: {
      text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
  },
  xAxis: {
      type: 'category',
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Population (millions)'
      }
  },
  legend: {
      enabled: false
  },
  tooltip: {
      pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
  },
  series: [{
      name: 'Population',
      data: [
          ['Shanghai', 24.2],
          ['Beijing', 20.8],
          ['Karachi', 14.9],
          ['Shenzhen', 13.7],
          ['Guangzhou', 13.1],
          ['Istanbul', 12.7],
          ['Mumbai', 12.4],
          ['Moscow', 12.2],
          ['São Paulo', 12.0],
          ['Delhi', 11.7],
          ['Kinshasa', 11.5],
          ['Tianjin', 11.2],
          ['Lahore', 11.1],
          ['Jakarta', 10.6],
          ['Dongguan', 10.6],
          ['Lagos', 10.6],
          ['Bengaluru', 10.3],
          ['Seoul', 9.8],
          ['Foshan', 9.3],
          ['Tokyo', 9.3]
      ],
      dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
  };
}
