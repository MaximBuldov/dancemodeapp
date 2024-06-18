import { ProfileForm } from '@/components';
import { useTypedNavigation } from '@/hooks';
import { ISignupForm } from '@/models';
import { SubmitHandler } from 'react-hook-form';

export const Signup = () => {
  const { navigate } = useTypedNavigation();

  // const { mutate, isPending } = useMutation({
  //   mutationFn: userService.signup,
  //   onSuccess: (data) => {
  //     navigate('Calendar');
  //     // userStore.setUser(data);
  //   }
  // });
  const onSubmit: SubmitHandler<ISignupForm> = (data) => {
    console.log(data);
    // mutate(data);
  };
  return (
    <ProfileForm
      title="Welcome to Dance Mode ❤️"
      onSubmit={onSubmit}
      isPending={false}
      isLabels={false}
      submitButton="Signup"
      initialValues={null}
      isRequired={true}
    />
  );
};
