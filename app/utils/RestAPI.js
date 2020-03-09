/**
 * @Screen : RestAPI
 * @Description :
 *
 * @providesModule RestAPI
 */
import {GET_IMAGES} from './Constant';

const RestAPI = {
  /**
   *
   * @param data
   * @returns {Promise<any>}
   */
  getPhotos: async function(page) {
    return fetch(GET_IMAGES + `?page=${page}&limit=25`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json());
  },
};

module.exports = RestAPI;
