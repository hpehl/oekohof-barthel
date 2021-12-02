import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.js';
import 'photoswipe/dist/photoswipe.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery-1',
  children: 'a',
  preloadFirstSlide: true,
  pswpModule: PhotoSwipe
});
lightbox.init();
