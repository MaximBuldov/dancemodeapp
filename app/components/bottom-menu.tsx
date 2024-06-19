import { Pressable, Text, View } from 'react-native';

import { useTypedNavigation } from '@/hooks';
import { TypeRootStackParamList } from '@/models';
import { userStore } from '@/stores';
import { observer } from 'mobx-react-lite';

interface IMenuItem {
  label: string;
  icon: string;
  path: keyof TypeRootStackParamList;
}

const userItems: IMenuItem[] = [
  {
    label: 'classes',
    icon: '🗓️',
    path: 'Classes'
  },
  {
    label: 'coupons',
    icon: '🎟️',
    path: 'Coupons'
  },
  {
    label: 'payments',
    icon: '💵',
    path: 'Payments'
  },
  {
    label: 'profile',
    icon: '💃',
    path: 'Profile'
  }
];

const adminItems: IMenuItem[] = [
  {
    label: 'calendar',
    icon: '🗓️',
    path: 'Calendar'
  },
  {
    label: 'students',
    icon: '👯‍♀️',
    path: 'Students'
  },
  {
    label: 'orders',
    icon: '💵',
    path: 'Orders'
  },
  {
    label: 'reports',
    icon: '🗂️',
    path: 'Reports'
  },
  {
    label: 'coupon',
    icon: '🎟️',
    path: 'Coupon'
  },
  {
    label: 'profile',
    icon: '💃',
    path: 'Profile'
  }
];

const publicItems: IMenuItem[] = [
  {
    label: 'login',
    icon: '🚪',
    path: 'Login'
  },
  {
    label: 'sign up',
    icon: '💃',
    path: 'Signup'
  },
  {
    label: 'forgot password',
    icon: '🤔',
    path: 'ForgotPassword'
  }
];

export const BottomMenu = observer(() => {
  const { navigate } = useTypedNavigation();
  const menuItems: IMenuItem[] = userStore.isAuth
    ? userStore.isAdmin
      ? adminItems
      : userItems
    : publicItems;

  return (
    <View className="absolute bottom-0 flex w-full flex-row items-center justify-between bg-white p-4">
      {menuItems.map((el) => (
        <Pressable
          key={el.label}
          className={`w-1/${menuItems.length}`}
          onPress={() => navigate(el.path)}
        >
          <Text className="text-center text-xl">{el.icon}</Text>
          <Text className="text-center text-xs">{el.label}</Text>
        </Pressable>
      ))}
    </View>
  );
});
