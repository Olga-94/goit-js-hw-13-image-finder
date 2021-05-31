
export default class ImagesApiService {
    constructor() {
      this.baseURL = 'https://pixabay.com/api';
      this.key = '21849965-5d080cd355a76516303a4dd69';
      this.searchQuery = '';
      this.page = 1;
  }
  async getImages() {
    const response = await fetch(
      `${this.baseURL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
    );
    return response.json();
  }

    incrementPage() {
        this.page += 1;
    }
    
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}

