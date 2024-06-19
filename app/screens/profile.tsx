import { ProfileForm } from '@/components';
import { Button } from '@/components/ui';
import { userService } from '@/services';
import { cartStore, userStore } from '@/stores';
import { useMutation } from '@tanstack/react-query';
import { ScrollView, View } from 'react-native';
import Toast from 'react-native-toast-message';

export const Profile = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: userService.update,
    onSuccess: (_, values) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, confirm, ...data } = values;
      userStore.updateUser(data);
      Toast.show({
        type: 'success',
        text1: 'Information successfully updated 🥳'
      });
    }
  });

  return (
    <ScrollView>
      <ProfileForm
        title="Profile 👩"
        onSubmit={(data) => mutate(data)}
        isPending={isPending}
        isLabels={true}
        submitButton="Update profile"
        initialValues={userStore.data ?? undefined}
        isRequired={false}
      />
      <View className="pt-4 mt-4 border-t border-gray-300">
        <Button
          label="Log out"
          type="danger"
          block
          onPress={() => {
            cartStore.clear();
            userStore.logout();
          }}
        />
      </View>
    </ScrollView>
  );
};
