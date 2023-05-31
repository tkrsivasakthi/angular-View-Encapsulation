import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css'],
   encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChildoneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
