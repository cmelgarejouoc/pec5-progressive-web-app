import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent implements OnInit {
  image: Image | undefined;
  panelOpenState = false;

  constructor(
    private imagesService: ImagesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activateRoute.snapshot.paramMap.get('id');

    if (identifier !== null) {
      this.imagesService.getImageById(identifier).subscribe((image) => {
        if (!image) {
          return this.router.navigateByUrl('/');
        }

        this.image = image;

        return;
      });
    }
  }
}
