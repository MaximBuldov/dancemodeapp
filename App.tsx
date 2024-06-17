import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigation } from '@/routes/navigation';

import { BottomMenu, Header } from '@/components';

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<Header />
				<Navigation />
				<BottomMenu />
				<StatusBar style='light' />
			</SafeAreaProvider>
		</>
	);
}
