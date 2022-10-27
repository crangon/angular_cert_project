import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-direction-icon',
  templateUrl: './direction-icon.component.html',
  styleUrls: ['./direction-icon.component.css']
})
export class DirectionIconComponent implements OnInit {

  @Input() icon: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
