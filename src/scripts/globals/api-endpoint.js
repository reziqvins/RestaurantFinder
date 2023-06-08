import CONFIG from './config';

const API_ENDPOINT = {
  getResto: `${CONFIG.BASE_URL}list`,
  getReview: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
