import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
})
export class ComponentListComponent implements OnInit {
  images: Image[] = [];
  currentView: string = 'grid';
  showSpinner: boolean = false;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.imagesService.getAllImages().subscribe((images) => {
      this.images = images;
      this.showSpinner = false;
    });
  }

  changeView(view: string): void {
    this.currentView = view;
  }
}
