import clsx from 'clsx';
import { FC } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

type IButtonTypes = 'primary';
type IButtonHtmlTypes = 'reset' | 'button' | 'submit' | undefined;

interface IButton extends PressableProps {
	label: string;
	type?: IButtonTypes;
	loading?: boolean;
	block?: boolean;
	htmlType?: IButtonHtmlTypes;
}

export const Button: FC<IButton> = ({ label, type, block, ...rest }) => {
	return (
		<Pressable
			className={clsx(
				'rounded-md p-3',
				type === 'primary' && 'bg-primary',
				block ? 'w-full' : 'w-auto'
			)}
			{...rest}
		>
			<Text className='text-center text-base font-medium text-white'>
				{label}
			</Text>
		</Pressable>
	);
};
