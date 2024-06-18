import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigation } from '@/routes/navigation';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        // onErrorFn(
        //   error as AxiosError<IResponseError>,
        //   query.meta?.errorMessage as string
        // );
      }
    }),
    mutationCache: new MutationCache({
      // onError: (error) => {
      //   onErrorFn(error as AxiosError<IResponseError>);
      // }
    })
  });
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="light" />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
