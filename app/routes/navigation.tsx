import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomMenu, Header } from '@/components';
import { publicRoutes } from './routes';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            padding: 16
          }
        }}
      >
        {publicRoutes.map((route) => (
          <Stack.Screen key={route.name} {...route} />
        ))}
      </Stack.Navigator>
      <BottomMenu />
    </NavigationContainer>
  );
};
