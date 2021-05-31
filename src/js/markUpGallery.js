import getRefs from '../js/refs';
import imageCard from '../templates/imageCard.hbs';
const refs = getRefs();

export default function markUpGallery(hits) {
    const markUp = imageCard(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markUp);
}
