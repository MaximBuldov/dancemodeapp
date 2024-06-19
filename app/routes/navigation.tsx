import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomMenu, Header } from '@/components';
import { userStore } from '@/stores';
import { observer } from 'mobx-react-lite';
import { adminRoutes, publicRoutes, userRoutes } from './routes';

const Stack = createNativeStackNavigator();

export const Navigation = observer(() => {
  const routes = userStore.isAuth
    ? userStore.isAdmin
      ? adminRoutes
      : userRoutes
    : publicRoutes;

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
        {routes.map((route) => (
          <Stack.Screen key={route.name} {...route} />
        ))}
      </Stack.Navigator>
      <BottomMenu />
    </NavigationContainer>
  );
});
