import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-vinnytsia',
  templateUrl: './vinnytsia.component.html',
  styleUrl: './vinnytsia.component.scss'
})
export class VinnytsiaComponent implements OnInit {
  constructor(private renderer: Renderer2) { }

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
  ngOnInit(): void {
   
  }
}
