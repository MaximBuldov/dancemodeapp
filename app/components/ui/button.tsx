import AntDesign from '@expo/vector-icons/AntDesign';
import clsx from 'clsx';
import { FC } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

type IButtonTypes = 'primary';

interface IButton extends PressableProps {
  label: string;
  type?: IButtonTypes;
  loading?: boolean;
  block?: boolean;
  isLoading?: boolean;
}

export const Button: FC<IButton> = ({
  label,
  type,
  block,
  isLoading,
  ...rest
}) => {
  return (
    <Pressable
      className={clsx(
        'rounded-md p-3',
        type === 'primary' && 'bg-primary',
        block ? 'w-full' : 'w-auto'
      )}
      disabled={isLoading}
      {...rest}
    >
      <Text className="text-center text-base font-medium text-white">
        <AntDesign name="loading1" size={18} />
        {label}
      </Text>
    </Pressable>
  );
};
