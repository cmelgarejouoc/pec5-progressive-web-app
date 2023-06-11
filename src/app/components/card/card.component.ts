import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() images: Image[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
