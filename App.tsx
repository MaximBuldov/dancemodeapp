import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@/components/ui';
import { IResponseError } from '@/models';
import { Navigation } from '@/routes/navigation';
import { showError } from '@/utils/show-error';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        showError(
          error as AxiosError<IResponseError>,
          query.meta?.errorMessage as string
        );
      }
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        showError(error as AxiosError<IResponseError>);
      }
    })
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="light" />
        <Toast />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
