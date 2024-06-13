import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize galleryData correctly', () => {
    const galleryData = [{ imgSrc: 'image1.jpg', imgAlt: 'Image 1' }, { imgSrc: 'image2.jpg', imgAlt: 'Image 2' }];
    component.galleryData = galleryData;
    fixture.detectChanges();
    expect(component.galleryData).toEqual(galleryData);
  });

  it('should initialize totalImageCount correctly on ngOnInit', () => {
    const galleryData = [{ imgSrc: 'image1.jpg', imgAlt: 'Image 1' }, { imgSrc: 'image2.jpg', imgAlt: 'Image 2' }];
    component.galleryData = galleryData;
    component.ngOnInit();
    expect(component.totalImageCount).toBe(galleryData.length);
  });

  it('should set previewImage and showMask to true and set current image on onPreviewImage', () => {
    const galleryData = [{ imgSrc: 'image1.jpg', imgAlt: 'Image 1' }, { imgSrc: 'image2.jpg', imgAlt: 'Image 2' }];
    component.galleryData = galleryData;
    component.onPreviewImage(1);
    expect(component.showMask).toBe(true);
    expect(component.previewImage).toBe(true);
    expect(component.currentIndex).toBe(1);
    expect(component.currentBoxImage).toBe(galleryData[1]);
  });

  it('should navigate to the next image on next method', () => {
    const galleryData = [{ imgSrc: 'image1.jpg', imgAlt: 'Image 1' }, { imgSrc: 'image2.jpg', imgAlt: 'Image 2' }];
    component.galleryData = galleryData;
    component.currentIndex = 0;
    component.next();
    expect(component.currentIndex).toBe(1);
    expect(component.currentBoxImage).toBe(galleryData[1]);
  });

  it('should navigate to the previous image on prev method', () => {
    const galleryData = [{ imgSrc: 'image1.jpg', imgAlt: 'Image 1' }, { imgSrc: 'image2.jpg', imgAlt: 'Image 2' }];
    component.galleryData = galleryData;
    component.currentIndex = 1;
    component.prev();
    expect(component.currentIndex).toBe(0);
    expect(component.currentBoxImage).toBe(galleryData[0]);
  });

  it('should handle animation end correctly on onAnimationEnd', () => {
    const event: any = { toState: 'void' };
    component.onAnimationEnd(event);
    expect(component.showMask).toBe(false);
  });

  it('should set previewImage to false on onClosePreview', () => {
    component.previewImage = true;
    component.onClosePreview();
    expect(component.previewImage).toBe(false);
  });
});
