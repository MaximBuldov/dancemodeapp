import { ProfileForm } from '@/components';
import { useTypedNavigation } from '@/hooks';

export const Signup = () => {
  const { navigate } = useTypedNavigation();

  // const { mutate, isPending } = useMutation({
  //   mutationFn: userService.signup,
  //   onSuccess: (data) => {
  //     navigate('Calendar');
  //     // userStore.setUser(data);
  //   }
  // });
  return (
    <ProfileForm
      title="Welcome to Dance Mode ❤️"
      onSubmit={() => ''}
      isPending={false}
      isLabels={false}
      submitButton="Signup"
      initialValues={null}
      isRequired={true}
    />
  );
};
