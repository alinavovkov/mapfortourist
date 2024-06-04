import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  pinPosition = { x: 100, y: 100 }; // Initial position of the pin
  dragging = false;
  offset = { x: 0, y: 0 };

  constructor() { }

  ngOnInit(): void { }

  startDrag(event: MouseEvent): void {
    this.dragging = true;
    this.offset.x = event.clientX - this.pinPosition.x;
    this.offset.y = event.clientY - this.pinPosition.y;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.dragging) {
      this.pinPosition.x = event.clientX - this.offset.x;
      this.pinPosition.y = event.clientY - this.offset.y;
    }
  }

  @HostListener('window:mouseup')
  endDrag(): void {
    this.dragging = false;
  }
}

