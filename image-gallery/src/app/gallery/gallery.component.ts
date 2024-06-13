import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imgSrc:string;
  imgAlt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({trasform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({trasform: 'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.8}))
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {

  @Input() galleryData: Item[] = [];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentBoxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
   }

  onPreviewImage(index: number): void{
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentBoxImage = this.galleryData[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if(event.toState === 'void'){
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.galleryData.length -1){
      this.currentIndex = 0;
    }
    this.currentBoxImage = this.galleryData[this.currentIndex];
  }
  prev(): void {
    this.currentIndex = this.currentIndex -1;
    if(this.currentIndex < 0){
      this.currentIndex = this.galleryData.length -1;
    }
    this.currentBoxImage = this.galleryData[this.currentIndex];
  }
}
