import clsx from 'clsx';
import {
	Control,
	Controller,
	FieldPath,
	FieldValues,
	RegisterOptions
} from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface IInput<T extends FieldValues>
	extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
	control: Control<T>;
	name: FieldPath<T>;
	block?: boolean;
	rules?: Omit<
		RegisterOptions<T, FieldPath<T>>,
		'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
	>;
}

export const Input = <T extends Record<string, any>>({
	control,
	rules,
	name,
	block,
	className,
	...rest
}: IInput<T>): JSX.Element => {
	return (
		<View>
			<Controller
				control={control}
				name={name}
				rules={rules}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							className={clsx(
								'flex rounded-lg border bg-white p-3',
								error ? 'border-red-500' : 'border-gray-300',
								block && 'w-full'
							)}
						>
							<TextInput
								autoCapitalize='none'
								onChangeText={onChange}
								onBlur={onBlur}
								value={(value || '').toString()}
								{...rest}
							/>
						</View>
						{error && (
							<Text className='text-red-600'>
								{error.message}
							</Text>
						)}
					</>
				)}
			/>
		</View>
	);
};
