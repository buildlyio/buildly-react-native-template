import httpService from '../../../services/httpService';

export const getCoregroupQuery = async displayAlert => {
  try {
    const response = await httpService.makeRequest(
      'get',
      `${window.env.API_URL}coregroups/`,
    );
    return response.data;
  } catch (error) {
    displayAlert('error', "Couldn't load core groups due to some error!");
    return [];
  }
};
