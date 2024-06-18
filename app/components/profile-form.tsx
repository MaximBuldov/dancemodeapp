import { ISignupForm, IUser } from '@/models';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { DateField, TextField, Title } from './ui';

interface ProfileFormProps {
  title: string;
  onSubmit: (data: ISignupForm) => void;
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
  const { handleSubmit, reset, control } = useForm();

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

  return (
    <View>
      <Title>{title}</Title>
      <TextField
        addonBefore={label(firstName)}
        placeholder={placeholder(firstName)}
        control={control}
        name="first_name"
        rules={{ required: 'Please input your first name!' }}
        block
        margin
      />
      <TextField
        addonBefore={label(lastName)}
        placeholder={placeholder(lastName)}
        control={control}
        name="last_name"
        rules={{ required: 'Please input your last name!' }}
        block
        margin
      />
      <DateField
        addonBefore="Date of Birthday"
        placeholder={placeholder(dob)}
        control={control}
        name="dob"
        rules={{ required: 'Please input your date of birthday!' }}
        block
        margin
      />
      {/* 
        </Item>
        <Item
          name={['acf', 'dob']}
          rules={[
            {
              required: isRequired,
              message: 'Please input your date of birthday!'
            }
          ]}
        >
          <Input
            addonBefore="Date of Birthday"
            type="date"
            placeholder={placeholder(dob)}
            style={{ width: '100%' }}
          />
        </Item>
        <Item
          name="email"
          rules={[
            { required: isRequired, message: 'Please input your email!' },
            { type: 'email', message: 'The input is not valid E-mail!' }
          ]}
        >
          <Input
            addonBefore={label(email)}
            prefix={<MailOutlined />}
            placeholder={placeholder(email)}
          />
        </Item>
        <Item
          name={['acf', 'billing_phone']}
          rules={[
            { required: isRequired, message: 'Please input your phone!' },
            {
              min: 10,
              message: 'Please enter correct phone number'
            }
          ]}
        >
          <Input
            maxLength={10}
            addonBefore={label(phone)}
            prefix={<PhoneOutlined />}
            placeholder={placeholder(phone)}
          />
        </Item>
        <Item
          name={['acf', 'instagram']}
          rules={[
            { required: isRequired, message: 'Please input your instagram!' }
          ]}
        >
          <Input
            addonBefore={label(instagram)}
            prefix={<InstagramOutlined />}
            placeholder={`${placeholder(instagram)} @dancemode`}
          />
        </Item>
        <Item
          name="password"
          hasFeedback
          rules={[
            {
              required: isRequired,
              message: 'Please input your password!'
            },
            {
              min: 6,
              message: 'Minimum password length is 6 characters'
            }
          ]}
        >
          <Input.Password
            addonBefore={label(password)}
            prefix={<LockOutlined />}
            placeholder={placeholder(password)}
          />
        </Item>
        <Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: isRequired,
              message: 'Please confirm your password!'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                );
              }
            })
          ]}
        >
          <Input.Password
            addonBefore={label(confirmPassword)}
            placeholder={placeholder(confirmPassword)}
            prefix={<LockOutlined />}
          />
        </Item>
        <Button type="primary" htmlType="submit" block loading={isPending}>
          {submitButton}
        </Button>
      </Form> */}
    </View>
  );
};
