import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const imageListRef = galleryItems
  .map(galleryItem => 
    `<div class="gallery__item"> 
        <a class="gallery__link" 
        href="${galleryItem.original}"> 
        <img 
        class="gallery__image" 
        src = "${galleryItem.preview}" 
        data-source="${galleryItem.original}" 
        alt = "${galleryItem.description}" 
        /> 
        </a> 
    </div>`)
    .join("");

galleryList.insertAdjacentHTML("beforeend", imageListRef);

new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionPosition: 'bottom',
    captionDelay: 250,
    enableKeyboard: true,
  });