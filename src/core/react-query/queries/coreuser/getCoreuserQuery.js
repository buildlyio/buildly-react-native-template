import httpService from '../../../services/httpService';

export const getCoreuserQuery = async displayAlert => {
  try {
    const response = await httpService.makeRequest(
      'get',
      `${window.env.API_URL}coreuser/`,
    );
    return response.data;
  } catch (error) {
    displayAlert('error', "Couldn't load core users due to some error!");
    return [];
  }
};
