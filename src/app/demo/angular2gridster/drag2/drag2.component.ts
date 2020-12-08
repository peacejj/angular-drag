import { Component, OnInit } from '@angular/core';
import {GridsterComponent, IGridsterDraggableOptions, IGridsterOptions} from "angular2gridster";

@Component({
  selector: 'app-drag2',
  templateUrl: './drag2.component.html',
  styleUrls: ['./drag2.component.less']
})
export class Drag2Component implements OnInit {

  widgets: Array<any> = [
    {
      x: 0,
      y: 0,
      w: 1,
      h: 2,
      title: "Basic form inputs 1"
    },
    {
      x: 1,
      y: 0,
      w: 1,
      h: 2,
      title: "Basic form inputs 2"
    },
    {
      x: 1,
      y: 1,
      w: 2,
      h: 1,
      title: "Basic form inputs 3"
    },
    {
      x: 3,
      y: 1,
      w: 1,
      h: 2,
      title: "Basic form inputs 4"
    },
    {
      w: 1,
      h: 2,
      title: "Basic form inputs x"
    }

  ];

  gridsterOptions: IGridsterOptions = {
    // core configuration is default one - for smallest view. It has hidden minWidth: 0.
    lanes: 12, // amount of lanes (cells) in the grid
    direction: "vertical", // floating top - vertical, left - horizontal
    floating: true,
    dragAndDrop: true, // enable/disable drag and drop for all items in grid
    resizable: true, // enable/disable resizing by drag and drop for all items in grid
    resizeHandles: {
      s: true,
      e: true,
      se: true
    },
    widthHeightRatio: 2, // proportion between item width and height
    lines: {
      visible: true,
      color: "#afafaf",
      width: 1
    },
    // cellHeight:100,
    shrink: true,//缩小
    useCSSTransforms: true,
    responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
    responsiveDebounce: 500, // window resize debounce time
    // responsiveSizes: true,
    // responsiveToParent: true,
    // List of different gridster configurations for different breakpoints.
    // Each breakpoint is defined by name stored in "breakpoint" property. There is fixed set of breakpoints
    // available to use with default minWidth assign to each.
    // - sm: 576 - Small devices
    // - md: 768 - Medium devices
    // - lg: 992 - Large devices
    // - xl: 1200 - Extra large
    // MinWidth for each breakpoint can be overwritten like it's visible below.
    // ResponsiveOptions can overwrite default configuration with any option available.

  };

  gridsterDraggableOptions: IGridsterDraggableOptions = {
    handlerClass: "panel-heading"
  };

  constructor() { }

  ngOnInit(): void {
  }

  remove($event, index: number, gridster: GridsterComponent) {
    $event.preventDefault();
    this.widgets.splice(index, 1);
    console.log("widget remove", index);
  }
}
