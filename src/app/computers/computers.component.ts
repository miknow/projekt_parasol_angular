import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent {

  numerWybranegoObrazka = 0

  kliknietoElement(numerObrazka) {
  this.numerWybranegoObrazka = numerObrazka;
  console.warn('Numer wybranego obrazka: ' ,
  this.numerWybranegoObrazka);
  
    }
  
  }