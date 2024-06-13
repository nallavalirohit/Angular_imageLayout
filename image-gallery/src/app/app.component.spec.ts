import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component'; // Adjust the import based on the actual path
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GalleryComponent  // Declare the component used in the template
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add this if you are using Web Components
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data correctly', () => {
    const expectedData = [
      { imgSrc: 'https://via.placeholder.com/600/92c952', imgAlt: '1' },
      { imgSrc: 'https://via.placeholder.com/600/4e557c', imgAlt: '2' },
      { imgSrc: 'https://via.placeholder.com/600/ee0a7e', imgAlt: '3' },
      { imgSrc: 'https://via.placeholder.com/600/f9f067', imgAlt: '4' },
      { imgSrc: 'https://via.placeholder.com/600/ca50ac', imgAlt: '5' },
      { imgSrc: 'https://via.placeholder.com/600/4f5b8d', imgAlt: '6' },
      { imgSrc: 'https://via.placeholder.com/600/1e71a2', imgAlt: '7' },
      { imgSrc: 'https://via.placeholder.com/600/a7c272', imgAlt: '8' },
      { imgSrc: 'https://via.placeholder.com/600/35185e', imgAlt: '9' },
      { imgSrc: 'https://via.placeholder.com/600/54176f', imgAlt: '10' },
    ];
    expect(component.data).toEqual(expectedData);
  });

  it('should render data correctly in the template', () => {
    fixture.detectChanges(); // Ensure the template is updated with data

    const debugElement = fixture.debugElement;
    const images = debugElement.queryAll(By.css('img'));

    expect(images.length).toBe(10);

    images.forEach((img, index) => {
      const src = img.nativeElement.getAttribute('src');
      const alt = img.nativeElement.getAttribute('alt');
      expect(src).toBe(component.data[index].imgSrc);
      expect(alt).toBe(component.data[index].imgAlt);
    });
  });
});
