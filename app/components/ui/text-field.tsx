import { IField } from '@/models';
import { Controller } from 'react-hook-form';
import { Input } from './input';

export const TextField = <T extends Record<string, any>>({
  control,
  rules,
  name,
  ...rest
}: IField<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error }
      }) => (
        <Input
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          error={error}
          {...rest}
        />
      )}
    />
  );
};
