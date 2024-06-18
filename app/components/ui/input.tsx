import clsx from 'clsx';
import { FieldError } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface IInput
  extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
  error?: FieldError;
  block?: boolean;
  margin?: boolean;
  addonBefore?: string;
  prefix?: React.ReactNode;
  onChange?: (...event: any[]) => void;
  value?: string | number;
}

export const Input = ({
  error,
  block,
  margin,
  prefix,
  onChange,
  onBlur,
  value,
  ...rest
}: IInput): JSX.Element => {
  return (
    <View className={clsx(margin && 'mb-4')}>
      <View
        className={clsx(
          'flex rounded-lg border bg-white p-3 flex-row',
          error ? 'border-red-500' : 'border-gray-300',
          block && 'w-full'
        )}
      >
        {prefix && <View className="mt-1 mr-2">{prefix}</View>}
        <TextInput
          autoCapitalize="none"
          onChangeText={onChange}
          onBlur={onBlur}
          value={(value || '').toString()}
          {...rest}
        />
      </View>
      {error && <Text className="text-red-600">{error.message}</Text>}
    </View>
  );
};
