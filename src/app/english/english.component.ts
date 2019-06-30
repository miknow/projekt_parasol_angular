import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent {

numerWybranegoObrazka = 0

kliknietoElement(numerObrazka) {
this.numerWybranegoObrazka = numerObrazka;
console.warn('Numer wybranego obrazka: ' ,
this.numerWybranegoObrazka);

  }

}
