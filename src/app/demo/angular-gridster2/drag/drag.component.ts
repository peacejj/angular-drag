import { Component, OnInit } from '@angular/core';
import {fromEvent} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {DisplayGrid, GridsterConfig, GridsterItem, GridType} from "angular-gridster2";

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.less']
})
export class DragComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  private chartWidth: number;

  constructor(
  ) {
    this.chartWidth = (document.documentElement.offsetWidth || document.body.offsetWidth) - 70 - 130;
  }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit(): void {

    fromEvent(window, 'resize')
      .pipe(
        debounceTime(100), // 等待用户停止输入1000ms
      ).subscribe((event) => {
      // 这里处理页面变化时的操作
      this.chartWidth = (document.documentElement.offsetWidth || document.body.offsetWidth) - 70 - 130;
      console.log(this.chartWidth);
      this.options.fixedColWidth = this.chartWidth / 12;
      this.options.api.optionsChanged();
    });


    this.options = {
      gridType: GridType.Fixed,//类型
      fixedColWidth: this.chartWidth / 12,
      fixedRowHeight: 100,
      outerMarginRight: 10,
      // outerMargin:false,
      // minItemArea:12,
      // maxItemArea	:12,
      // displayGrid: DisplayGrid.OnDragAndResize,//背景线
      displayGrid: DisplayGrid.Always,//背景线
      swap: true,//交换
      draggable: {
        enabled: true,
      },//拖拽
      resizable: {
        enabled: true,
      },//大小
      minCols: 1,
      maxCols: 24,//两屏
      itemChangeCallback: DragComponent.itemChange,
      itemResizeCallback: DragComponent.itemResize,
    };

    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 2, x: 11 },
      // { cols: 2, rows: 2, y: 0, x: 2 },
    ];

  }

}
