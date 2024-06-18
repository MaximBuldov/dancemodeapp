import { ISignupForm, IUser } from '@/models';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { Button, DateField, TextField, Title } from './ui';

interface ProfileFormProps {
  title: string;
  onSubmit: SubmitHandler<ISignupForm>;
  isPending: boolean;
  isLabels: boolean;
  submitButton: string;
  initialValues: IUser | null;
  isRequired: boolean;
}

const labelsConfig = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  phone: 'Phone',
  instagram: 'Instagram',
  password: 'Password',
  confirmPassword: 'Confirm Password',
  dob: 'Date of Birthday'
};

export const ProfileForm = ({
  title,
  onSubmit,
  isPending,
  isLabels,
  submitButton,
  initialValues,
  isRequired
}: ProfileFormProps) => {
  const { handleSubmit, reset, control, watch } = useForm<ISignupForm>();
  const passwordRef = useRef({});
  passwordRef.current = watch('password', '');

  const label = (text: string) => {
    return isLabels ? text : '';
  };

  const placeholder = (text: string) => {
    return !isLabels ? text : '';
  };

  const {
    firstName,
    lastName,
    email,
    phone,
    instagram,
    password,
    confirmPassword,
    dob
  } = labelsConfig;

  const fieldConfig = {
    control,
    block: true,
    margin: true,
    small: true
  };

  return (
    <ScrollView>
      <Title>{title}</Title>
      <TextField<ISignupForm>
        prefix={<AntDesign name="user" size={18} />}
        addonBefore={label(firstName)}
        placeholder={placeholder(firstName)}
        name="first_name"
        rules={{ required: 'Please input your first name!' }}
        {...fieldConfig}
      />
      <TextField<ISignupForm>
        prefix={<AntDesign name="user" size={18} />}
        addonBefore={label(lastName)}
        placeholder={placeholder(lastName)}
        name="last_name"
        rules={{ required: 'Please input your last name!' }}
        {...fieldConfig}
      />
      <DateField<ISignupForm>
        prefix={<AntDesign name="calendar" size={18} />}
        addonBefore="Date of Birthday"
        placeholder={placeholder(dob)}
        name="acf.dob"
        rules={{ required: 'Please input your date of birthday!' }}
        {...fieldConfig}
      />
      <TextField<ISignupForm>
        prefix={<AntDesign name="mail" size={18} />}
        addonBefore={label(email)}
        placeholder={placeholder(email)}
        name="email"
        keyboardType="email-address"
        rules={{
          required: 'Please input your email!',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid email address'
          }
        }}
        {...fieldConfig}
      />
      <TextField<ISignupForm>
        prefix={<AntDesign name="phone" size={18} />}
        addonBefore={label(phone)}
        placeholder={placeholder(phone)}
        name="acf.billing_phone"
        keyboardType="phone-pad"
        rules={{
          required: 'Please input your phone!',
          minLength: {
            value: 10,
            message: 'Please enter correct phone number'
          },
          maxLength: {
            value: 10,
            message: 'Please enter correct phone number'
          }
        }}
        {...fieldConfig}
      />
      <TextField<ISignupForm>
        prefix={<AntDesign name="instagram" size={18} />}
        addonBefore={label(instagram)}
        placeholder={`${placeholder(instagram)} @dancemode`}
        keyboardType="email-address"
        name="acf.instagram"
        rules={{
          required: 'Please input your instagram!'
        }}
        {...fieldConfig}
      />
      <TextField<ISignupForm>
        prefix={<AntDesign name="lock" size={18} />}
        placeholder={placeholder(password)}
        addonBefore={label(password)}
        secureTextEntry
        name="password"
        rules={{
          required: 'Please input your password!',
          minLength: {
            value: 6,
            message: 'Minimum password length is 6 characters'
          }
        }}
        {...fieldConfig}
      />
      <TextField<ISignupForm>
        prefix={<AntDesign name="lock" size={18} />}
        placeholder={placeholder(confirmPassword)}
        addonBefore={label(confirmPassword)}
        secureTextEntry
        name="confirm"
        rules={{
          required: 'Please input your password!',
          validate: (value) =>
            value === passwordRef.current || 'The password does not match'
        }}
        {...fieldConfig}
      />
      <Button
        label={submitButton}
        type="primary"
        block
        onPress={handleSubmit(onSubmit)}
      />
    </ScrollView>
  );
};
