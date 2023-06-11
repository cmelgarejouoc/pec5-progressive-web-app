import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnChanges {
  @Input() images: Image[] | undefined;

  displayedColumns: string[] = ['id', 'name', 'species'];
  dataSource: Image[] = [];

  constructor(private router: Router) {}

  ngOnChanges(): void {
    this.dataSource = this.images || [];
  }

  routeToDetail(element: Image) {
    const imageId = element.id;
    this.router.navigate(['/detail', imageId]);
  }
}
