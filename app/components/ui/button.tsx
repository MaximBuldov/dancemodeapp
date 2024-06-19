import clsx from 'clsx';
import { FC } from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text
} from 'react-native';

type IButtonTypes = 'primary' | 'danger';

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
        'rounded-md p-3 flex flex-row align-middle justify-center',
        type === 'primary' && 'bg-primary',
        type === 'danger' && 'bg-danger',
        block ? 'w-full' : 'w-auto'
      )}
      disabled={isLoading}
      {...rest}
    >
      {isLoading && (
        <ActivityIndicator size="small" color="#fff" className="mr-3" />
      )}
      <Text className="text-center text-base font-medium text-white">
        {label}
      </Text>
    </Pressable>
  );
};
