import httpService from '../../../services/httpService';

export const inviteTokenCheckQuery = async (token, displayAlert) => {
  try {
    const response = await httpService.makeRequest(
      'get',
      `${window.env.API_URL}coreuser/invite_check/?token=${token}`,
    );
    return response.data;
  } catch (error) {
    displayAlert('error', 'Invite token expired or invalid!');
    return [];
  }
};
