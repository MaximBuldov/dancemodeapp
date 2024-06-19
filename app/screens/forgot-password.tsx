import { Button, TextField, Title } from '@/components/ui';
import { useTypedNavigation } from '@/hooks';
import { IResetPassword } from '@/models';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

export const ForgotPassword = () => {
  const { handleSubmit, reset, control, watch } = useForm<IResetPassword>();
  const { navigate } = useTypedNavigation();
  const passwordRef = useRef<string | undefined>();
  passwordRef.current = watch('password', '');

  // const sendCode = useMutation({
  //   mutationFn: userService.sendCode,
  //   onSuccess: ({ data }) => {
  //     messageApi.info(data.message);
  //   }
  // });

  const sendCode = {
    isSuccess: true
  };

  // const resetPassword = useMutation({
  //   mutationFn: userService.resetPassword,
  //   onSuccess: ({ data }) => {
  //     messageApi.info(data.message);
  //     navigate('/login');
  //   }
  // });
  const onSubmit: SubmitHandler<IResetPassword> = (data) => {
    console.log(data);
    // if (sendCode.isSuccess) {
    //   resetPassword.mutate(data);
    // } else {
    //   sendCode.mutate(data);
    // }
  };

  const fieldConfig = {
    control,
    block: true,
    margin: true
  };

  return (
    <View>
      <Title>Forgot Password 🤔</Title>
      <Text className="mb-4">
        {sendCode.isSuccess
          ? 'Enter verification code from email and new password'
          : 'Please enter your email address and we will send you link to reset password'}
      </Text>
      <TextField<IResetPassword>
        prefix={<AntDesign name="mail" size={18} />}
        placeholder="Your email"
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
      {sendCode.isSuccess && (
        <>
          <TextField<IResetPassword>
            prefix={<AntDesign name="qrcode" size={18} />}
            placeholder="Verification code"
            name="code"
            rules={{ required: 'Please input verification code!' }}
            {...fieldConfig}
          />
          <TextField<IResetPassword>
            prefix={<AntDesign name="lock" size={18} />}
            placeholder="New password"
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
          <TextField<IResetPassword>
            prefix={<AntDesign name="lock" size={18} />}
            placeholder="Confirm password"
            secureTextEntry
            name="confirm"
            rules={{
              required: 'Please input your password!',
              validate: (value) =>
                value === passwordRef.current || 'The password does not match'
            }}
            {...fieldConfig}
          />
        </>
      )}
      <Button
        label="Submit"
        type="primary"
        block
        onPress={handleSubmit(onSubmit)}
        // loading={sendCode.isPending || resetPassword.isPending}
      />
    </View>
  );
};
