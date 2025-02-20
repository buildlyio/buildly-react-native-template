import { useMutation } from '@tanstack/react-query';
import httpService from '../../../services/httpService';

export const useRegisterMutation = (navigation, navigateTo, displayAlert) =>
  useMutation({
    mutationFn: async registerData => {
      const response = await httpService.makeRequest(
        'post',
        `${Config.API_URL}coreuser/`,
        registerData,
      );
      return response;
    },
    onSuccess: async () => {
      displayAlert('success', 'Registration was successful');
      navigation.navigate(navigateTo);
    },
    onError: () => {
      displayAlert('error', 'Registration failed');
    },
  });
