import { Dayjs } from 'dayjs';

import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions
} from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { IUser } from './user.model';

export interface ILoginForm {
  username: string;
  password: string;
}

export type ISignupForm = IUser & ILoginForm & { confirm: string };

export interface ICreateProductsForm {
  dates: Dayjs[];
  classes: ICategoryOption[];
  name?: string;
  regular_price?: string;
  stock_quantity?: string;
}
export interface ICategoryOption {
  label: string;
  value: number;
}

export interface IField<T extends FieldValues>
  extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
  control: Control<T>;
  name: FieldPath<T>;
  block?: boolean;
  margin?: boolean;
  addonBefore?: string;
  prefix?: React.ReactNode;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}
