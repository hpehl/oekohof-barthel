import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.js';
import 'photoswipe/dist/photoswipe.css';

const lightbox1 = new PhotoSwipeLightbox({
  gallery: '#wohnung-1',
  children: 'a',
  preloadFirstSlide: true,
  pswpModule: PhotoSwipe
});
const lightbox2 = new PhotoSwipeLightbox({
  gallery: '#wohnung-2',
  children: 'a',
  preloadFirstSlide: true,
  pswpModule: PhotoSwipe
});
const lightbox3 = new PhotoSwipeLightbox({
  gallery: '#wohnung-3',
  children: 'a',
  preloadFirstSlide: true,
  pswpModule: PhotoSwipe
});
lightbox1.init();
lightbox2.init();
lightbox3.init();
