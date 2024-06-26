import { Component } from '@angular/core';

@Component({
  selector: 'app-crimea',
  templateUrl: './crimea.component.html',
  styleUrl: './crimea.component.scss'
})
export class CrimeaComponent {
  mainImage: string = '../../../assets/images/crimea/botanical_garden.jpg';
  images: string[] = [
'../../../assets/images/crimea/botanical_garden.jpg',
'../../../assets/images/crimea/nikitbotgarden.jpg',
'../../../assets/images/crimea/botanical_garden3.jpg',
'../../../assets/images/crimea/NikitskiyBotanicalGarden.jfif'
  ];

  onImageClick(image: string): void {
    this.mainImage = image;
  }

}
