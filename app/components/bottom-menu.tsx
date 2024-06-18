import { Pressable, Text, View } from 'react-native';

import { useTypedNavigation } from '@/hooks';
import { TypeRootStackParamList } from '@/models';

interface menuItem {
  label: string;
  icon: string;
  path: keyof TypeRootStackParamList;
}

const userItems = [
  {
    label: 'classes',
    icon: '🗓️'
  },
  {
    label: 'coupons',
    icon: '🎟️'
  },
  {
    label: 'payments',
    icon: '💵'
  },
  {
    label: 'profile',
    icon: '💃'
  }
];

const adminItems = [
  {
    label: 'calendar',
    icon: '🗓️'
  },
  {
    label: 'students',
    icon: '👯‍♀️'
  },
  {
    label: 'orders',
    icon: '💵'
  },
  {
    label: 'reports',
    icon: '🗂️'
  },
  {
    label: 'coupon',
    icon: '🎟️'
  },
  {
    label: 'profile',
    icon: '💃'
  }
];

const publicItems: menuItem[] = [
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

export const BottomMenu = () => {
  const { navigate } = useTypedNavigation();
  return (
    <View className="absolute bottom-0 flex w-full flex-row items-center justify-between bg-white p-4">
      {publicItems.map((el) => (
        <Pressable
          key={el.label}
          className="w-1/3"
          onPress={() => navigate(el.path)}
        >
          <Text className="text-center text-xl">{el.icon}</Text>
          <Text className="text-center text-xs">{el.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};
