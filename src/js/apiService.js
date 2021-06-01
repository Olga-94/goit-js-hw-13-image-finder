
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export default {
  key: '21849965-5d080cd355a76516303a4dd69',
  perPage: 12,
  pageNumber: 1,
  searchQuery: '',
  async getImages(searchQuery) {
    const request = `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=${this.perPage}&key=${this.key}`;
      const {
          data: { hits },
      } = await axios.get(request);
    this.pageNumber += 1;
     return hits;
    },
  
  resetPage() {
    this.pageNumber = 1;
  },
};