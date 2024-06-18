import { Component, ElementRef, ViewChild, HostListener, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../services/city.service';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  cities: any[];
  constructor(
    private cityService: CityService,
    private router: Router,
    private dialog: MatDialog // Inject MatDialog here

  ) {
    this.cities = this.cityService.getCities();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '550px',
      data: { enterAnimationDuration, exitAnimationDuration }, // Pass data if necessary
    });
  }
  handleCityClick(cityId: string): void {
    if (this.cityService.isCityVisited(cityId) == false) {
      this.cityService.markCityAsVisited(cityId);
    } else {
      this.cityService.unmarkCityAsVisited(cityId);
    }
  }
  isCityVisited(cityId: string): boolean {
    return this.cityService.isCityVisited(cityId);
  }

  toggleCityVisited(cityId: string): void {
    this.cityService.toggleCityVisited(cityId);
  }
  
  ngOnInit(): void {
  }
}
