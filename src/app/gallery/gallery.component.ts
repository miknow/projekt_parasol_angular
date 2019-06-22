import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

numerWybranegoObrazka = 0

kliknietoElement(numerObrazka) {
this.numerWybranegoObrazka = numerObrazka;
console.warn('Numer wybranego obrazka: ' ,
this.numerWybranegoObrazka);

  }

}
