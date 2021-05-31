import apiService from './apiService.js';
import getRefs from './refs.js';
import markUpGallery from './markUpGallery.js';
import { infoMsg, alertMsg } from './notification.js';
import scroll from './scroll.js';
import onOpenModal from './basicLightBox.js'


const refs = getRefs();


refs.form.addEventListener('submit', onSearch);
refs.loadBtn.addEventListener('click', onLoadBtn);
refs.gallery.addEventListener('click', onOpenModal)

function onSearch(e) {
    e.preventDefault();
    apiService.searchQuery = e.currentTarget.elements.query.value.trim();
  
    if (!apiService.searchQuery) {
            return
        }
    refs.gallery.innerHTML = '';
  apiService.resetPage();
  refs.loadBtn.classList.add('is-hidden');
  refs.form.reset();

    apiService.getImages().then(hits => {
        if (hits.length === 0) {
        alertMsg()
            return
        }
      markUpGallery(hits);
      refs.loadBtn.classList.remove('is-hidden');
    });
}
function onLoadBtn () {
  apiService.getImages().then(hits => {
    if (hits.length === 0) {
      infoMsg();
      return
    };
    markUpGallery(hits);
    refs.loadBtn.classList.remove('is-hidden');
    scroll();
  });
};

