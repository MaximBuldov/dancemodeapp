import { IField } from '@/models';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Input } from './input';

export const DateField = <T extends Record<string, any>>({
  control,
  rules,
  name,
  ...rest
}: IField<T>): JSX.Element => {
  const [modal, setModal] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error }
      }) => (
        <>
          <TouchableOpacity onPress={() => setModal((prev) => !prev)}>
            <Input
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              error={error}
              {...rest}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={modal}
            mode="date"
            onConfirm={(date) => {
              onChange(dayjs(date).format('MM/DD/YYYY'));
              setModal(false);
            }}
            onCancel={() => setModal(false)}
          />
        </>
      )}
    />
  );
};
