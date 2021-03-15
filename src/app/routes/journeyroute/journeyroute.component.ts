import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompactType, GridsterConfig } from 'angular-gridster2';
import { PositionsService } from 'src/app/service/positions.service';

@Component({
  selector: 'app-journeyroute',
  templateUrl: './journeyroute.component.html',
  styleUrls: ['./journeyroute.component.css']
})
export class JourneyrouteComponent implements OnInit {

  iscollapsed= false
  
  
  options?: GridsterConfig;
  loaded = false;

  constructor(private router : Router,private positionServc: PositionsService ) { }

  ngOnInit(): void {
    this.gridsterInit();
  }

  navigate(route:any){
    this.router.navigateByUrl(route)
  }

  gridsterInit(){
    this.options = {
      fixedRowHeight: 120,
      gridType: 'fixed',
      compactType: CompactType.None,
      margin: 1,
      outerMargin: false,
      minRows: 1,
      maxRows: 100,
      minItemRows: 1,
      maxItemRows: 50,
      defaultItemRows: 3,
      minCols: 3,
      maxCols: 90,
      maxItemCols: 100,
      fixedColWidth: 100,
      enableEmptyCellClick: false,
      minItemCols: 1,
      defaultItemCols: 1,
      maxItemArea: 250,
      minItemArea: 1,
      swap: true,
      displayGrid: 'onDrag&Resize',
      // compactType: 'none', // 'compactUp&Left',compactLeft&Up'
      pushItems: true,
      resizable: { enabled: true },
      draggable: {
        enabled: true
      },
      // itemChangeCallback: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => this.itemChange(item, itemComponent),
      // itemResizeCallback: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => this.itemResize(item, itemComponent),
    };

    // this.dashboard = [
    //   { x: 0, y: 0, cols: 3, rows: 5 }
    // ]

    // hiding the gridster untill positions are loaded
    this.loaded = false;

    this.positionServc.getPositions().subscribe((positions) => {
      //this.dashboard = positions;
     console.log(positions)
     this.loaded = true
    })
    // this.getPositionsFromLS();
  }
}
