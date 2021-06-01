
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export default class imagesApiService {
  constructor() {
    this.key = '21849965-5d080cd355a76516303a4dd69';
    this.perPage = 12;
    this.pageNumber = 1;
    this.searchQuery = '';
  }  async getImages() {
    const url = `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${this.key}`;
      const {data} = await axios.get(url);
    this.nextPage();
     return data.hits;
    }
  
  resetPage() {
    this.pageNumber = 1;
  }

   nextPage() {
    this.pageNumber += 1;
  }

  
   get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
};