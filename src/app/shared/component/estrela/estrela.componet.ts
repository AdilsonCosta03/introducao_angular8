import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-estrela',
  templateUrl: './estrela.component.html',
  styleUrls: ['./estrela.component.css'],
})
export class EstrelaComponent implements OnChanges {
  @Input()
  rating: number = 0;

  startWidth: number;

  ngOnChanges(): void {
    this.startWidth = (this.rating * 74) / 5;
  }
}
