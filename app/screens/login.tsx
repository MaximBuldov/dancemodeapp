import { useNavigation } from '@react-navigation/native';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import { Button, Input, Title } from '../components/ui';

import { useTypedNavigation } from '@/hooks';
import { ILoginForm } from '@/models';
import { userService } from '@/services';

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

	const onSubmit: SubmitHandler<ILoginForm> = data => {
		console.log(data);
		// mutate(data);
	};
	return (
		<View className='flex flex-col space-y-4'>
			<View className='flex'>
				<Title>Hey, please login 👋</Title>
			</View>
			<Input<ILoginForm>
				placeholder='Your email'
				control={control}
				name='username'
				rules={{ required: 'Please input your email!' }}
				keyboardType='email-address'
				block
			/>
			<Input<ILoginForm>
				placeholder='Your password'
				control={control}
				secureTextEntry
				name='password'
				block
				rules={{ required: 'Please input your password!' }}
			/>
			<Button
				label='Login'
				type='primary'
				block
				onPress={handleSubmit(onSubmit)}
			/>
			<View>
				<Pressable onPress={() => navigate('Signup')}>
					<Text>
						Don't have account yet? Please{' '}
						<Text className='text-primary'>signup</Text>
					</Text>
				</Pressable>
			</View>
		</View>
	);
};
