import { SubmitHandler, useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import { Button, TextField, Title } from '../components/ui';

import { useTypedNavigation } from '@/hooks';
import { ILoginForm } from '@/models';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Login = () => {
  const { handleSubmit, reset, control } = useForm<ILoginForm>({
    mode: 'onChange'
  });
  const { navigate } = useTypedNavigation();

  // const { mutate, isPending } = useMutation({
  // 	mutationFn: userService.login,
  // 	onSuccess: data => {
  // 		// navigate('/');
  // 		// userStore.setUser(data);
  // 	}
  // });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
    // mutate(data);
  };
  return (
    <View className="flex flex-col">
      <Title>Hey, please login 👋</Title>
      <TextField<ILoginForm>
        prefix={<AntDesign name="user" size={18} />}
        placeholder="Your email"
        control={control}
        name="username"
        rules={{ required: 'Please input your email!' }}
        keyboardType="email-address"
        block
        margin
      />
      <TextField<ILoginForm>
        prefix={<AntDesign name="lock" size={18} />}
        placeholder="Your password"
        control={control}
        secureTextEntry
        name="password"
        block
        rules={{ required: 'Please input your password!' }}
        margin
      />
      <Button
        label="Login"
        type="primary"
        block
        onPress={handleSubmit(onSubmit)}
      />
      <View className="pt-4 mt-4 border-t border-gray-300">
        <Pressable onPress={() => navigate('Signup')}>
          <Text>
            Don't have account yet? Please{' '}
            <Text className="text-primary">signup</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
