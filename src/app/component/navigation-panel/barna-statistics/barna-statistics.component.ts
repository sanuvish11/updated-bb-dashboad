import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barna-statistics',
  templateUrl: './barna-statistics.component.html',
  styleUrls: ['./barna-statistics.component.css']
})
export class BarnaStatisticsComponent implements OnInit {
  isbaranastatic = true;
  @Output() barnaComp = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  toggleclosebtn(){
    //this.isbaranastatic = !this.isbaranastatic;
    this.barnaComp.emit(false);
  }
}