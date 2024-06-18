import { Injectable } from '@angular/core';
interface City {
  id: string;
  name: string;
  visited: boolean;
  cx: number;
  cy: number;
  transformX: number;
  transformY: number;
}

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: City[] = [
    { id: 'vinnytsia', name: 'Вінниця', visited: false, cx: 209, cy: 169.4317, transformX: 205, transformY: 185 },
    { id: 'kyiv', name: 'Київ', visited: false, cx: 288.787, cy: 106.3165, transformX: 262.1168, transformY: 90.3494 },
    { id: 'zhytomyr', name: 'Житомир', visited: false, cx: 205, cy: 114.4317, transformX: 183.067, transformY: 98.0162 },
    { id: 'zaporizhia', name: 'Запоріжжя', visited: false, cx: 435, cy: 241.4317, transformX: 436, transformY: 258 },
    { id: 'lutsk', name: 'Луцьк', visited: false, cx: 105, cy: 87.4317, transformX: 75.067, transformY: 80 },
    { id: 'ternopil', name: 'Тернопіль', visited: false, cx: 118, cy: 152.4317, transformX: 92.45, transformY: 165.9629 },
    { id: 'sumy', name: 'Суми', visited: false, cx: 427, cy: 83.4317, transformX: 392.25, transformY: 81.8295 },
    { id: 'rivne', name: 'Рівне', visited: false, cx: 140, cy: 91.4317, transformX: 135, transformY: 85 },
    { id: 'poltava', name: 'Полтава', visited: false, cx: 415, cy: 141.4317, transformX: 377.25, transformY: 135 },
    { id: 'odessa', name: 'Одеса', visited: false, cx: 288, cy: 309.4317, transformX: 270, transformY: 302 },
    { id: 'mykolaiv', name: 'Миколаїв', visited: false, cx: 340, cy: 275.4317, transformX: 310.25, transformY: 265.5 },
    { id: 'lviv', name: 'Львів', visited: false, cx: 63, cy: 140.4317, transformX: 65, transformY: 134 },
    { id: 'luhansk', name: 'Луганськ', visited: false, cx: 582, cy: 200.4317, transformX: 549, transformY: 190 },
    { id: 'khmelnytskyi', name: 'Хмельницький', visited: false, cx: 162, cy: 161.4317, transformX: 156.5, transformY: 152.9629 },
    { id: 'kherson', name: 'Херсон', visited: false, cx: 364, cy: 297.4317, transformX: 373.95, transformY: 298 },
    { id: 'kharkiv', name: 'Харків', visited: false, cx: 484, cy: 133.4317, transformX: 485, transformY: 128 },
    { id: 'ivano-frankivsk', name: 'Івано-Франківськ', visited: false, cx: 87, cy: 185.4317, transformX: 90, transformY: 185 },
    { id: 'donetsk', name: 'Донецьк', visited: false, cx: 526, cy: 235.4317, transformX: 511.0501, transformY: 230.5 },
    { id: 'dnipro', name: 'Дніпро', visited: false, cx: 423, cy: 210.4317, transformX: 424.7498, transformY: 208.7631 },
    { id: 'cherkasy', name: 'Черкаси', visited: false, cx: 337, cy: 161.4317, transformX: 307, transformY: 155 },
    { id: 'chernivtsi', name: 'Чернівці', visited: false, cx: 125, cy: 216.4317, transformX: 126, transformY: 213 },
    { id: 'uzhhorod', name: 'Ужгород', visited: false, cx: 11, cy: 198.4317, transformX: 13.7499, transformY: 208.7629 },
    { id: 'kropyvnytskyi', name: 'Кропивницький', visited: false, cx: 338, cy: 212.4317, transformX: 306.0543, transformY: 208.763 },
    { id: 'chernihiv', name: 'Чернігів', visited: false, cx: 308.787, cy: 54.3165, transformX: 310.25, transformY: 51.6999 },
    { id: 'simferopol', name: 'Сімферополь', visited: false, cx: 406, cy: 377.4317, transformX: 390, transformY: 370 },
    { id: 'sevastopol', name: 'Севастополь', visited: false, cx: 388, cy: 396, transformX: 390, transformY: 394 }
  ];

  constructor() {
    const citiesFromStorage = localStorage.getItem('visitedCities');
    if (citiesFromStorage) {
      this.cities = JSON.parse(citiesFromStorage);
    }
  }

  private saveCitiesToStorage(): void {
    localStorage.setItem('visitedCities', JSON.stringify(this.cities));
  }

  getCities(): City[] {
    return this.cities;
  }

  markCityAsVisited(cityId: string): void {
    const city = this.cities.find(c => c.id === cityId);
    if (city) {
      city.visited = true;
      this.saveCitiesToStorage();
    }
  }
  unmarkCityAsVisited(cityId: string): void {
    const city = this.cities.find(c => c.id === cityId);
    if (city) {
      city.visited = false;
      this.saveCitiesToStorage();
    }
  }

  toggleCityVisited(cityId: string): void {
    const city = this.cities.find(c => c.id === cityId);
    if (city) {
      city.visited = !city.visited;
      this.saveCitiesToStorage();
    }
  }
  isCityVisited(cityId: string): boolean {
    const city = this.cities.find(c => c.id === cityId);
    return city ? city.visited : false;
  }
}
