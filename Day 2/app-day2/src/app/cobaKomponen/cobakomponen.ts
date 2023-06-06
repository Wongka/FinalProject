import { Component, Input } from "@angular/core";

@Component({
    selector: 'cobakomponen',
    template: `
        <h2>Ini adalah komponen baru</h2>
        <img [src] = "imageUrl">
        <img src="{{imageUrl}}">
        <img bind-src="imageUrl">
        <img [src]="imageUrl" (click)="onClick('satu')">
        <img src="{{imageUrl}}" on-click="onClick('dua')">

    `
  })
export class CobaKomponen{
    //input
    @Input() berapakali:number; 
    //property binding
    imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png";
    onClick(varString){
        console.log(`Click Gambar ke ${varString}`);
    }
}