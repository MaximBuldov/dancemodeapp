import { FC, PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View className="w-full mb-4">
      <Text className="text-xl font-semibold">{children}</Text>
    </View>
  );
};
