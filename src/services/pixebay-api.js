import axios from 'axios';

const PIXEBAY_KEY = '27745892-6b588e2559ed1316d69737419';
export const HITS_PER_PAGE = 12;

export const fetchImages = async (query, page = 1) => {
  const params = new URLSearchParams({
    q: query,
    page: page,
    key: PIXEBAY_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: HITS_PER_PAGE,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  return response.data;
};

const api = {
  fetchImages,
};

export default api;
