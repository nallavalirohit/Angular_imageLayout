import { Component } from '@angular/core';

interface Item {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // title = 'image-gallery';

  data: Item[] = [
  { imgSrc: 'https://via.placeholder.com/600/92c952',
   imgAlt: '1' },
  { imgSrc: 'https://via.placeholder.com/600/4e557c',
   imgAlt: '2' },
  { imgSrc: 'https://via.placeholder.com/600/ee0a7e',
   imgAlt: '3' },
  { imgSrc: 'https://via.placeholder.com/600/f9f067',
   imgAlt: '4' },
  { imgSrc: 'https://via.placeholder.com/600/ca50ac',
   imgAlt: '5' },
  { imgSrc: 'https://via.placeholder.com/600/4f5b8d',
   imgAlt: '6' },
  { imgSrc: 'https://via.placeholder.com/600/1e71a2',
   imgAlt: '7' },
  { imgSrc: 'https://via.placeholder.com/600/a7c272',
   imgAlt: '8' },
  { imgSrc: 'https://via.placeholder.com/600/35185e',
   imgAlt: '9' },
  { imgSrc: 'https://via.placeholder.com/600/54176f',
   imgAlt: '10' }
  ];
  
}
