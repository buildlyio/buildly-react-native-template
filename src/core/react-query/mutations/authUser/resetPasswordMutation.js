import { useMutation } from '@tanstack/react-query';
import httpService from '../../../services/httpService';
import { routes } from '@routes/routesConstants';

export const useResetPasswordMutation = (displayAlert, setError, history) =>
  useMutation(
    async resetData => {
      const response = await httpService.makeRequest(
        'post',
        `${window.env.API_URL}coreuser/reset_password/`,
        resetData,
      );
      return response.data;
    },
    {
      onSuccess: async (data, variables) => {
        if (data && data.count > 0) {
          if (history) {
            // TODO: need to navigate to verification screen
            // history.push({
            //   pathname: routes.VERIFICATION,
            //   state: { email: variables.email },
            // });
          } else {
            displayAlert('success', data.detail);
          }
        } else {
          setError({
            email: {
              error: true,
              message:
                'Email not registered. Re-enter correct email. Otherwise, contact support@email.com',
            },
          });
        }
      },
      onError: () => {
        displayAlert('error', 'Email could not be sent');
      },
    },
  );
