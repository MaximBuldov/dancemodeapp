import { IResponseError } from '@/models';
import { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';

export function showError(error: AxiosError<IResponseError>, message?: string) {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: message || error.response?.data.message || error.message
  });
}
