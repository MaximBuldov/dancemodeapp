import { IKeys, IProduct, IStatus } from '@/models';
import { productService } from '@/services';
import { userStore } from '@/stores';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Toast from 'react-native-toast-message';

interface IUseProductStatusUpdate {
  day: dayjs.Dayjs;
  product_id: number;
  onSuccess?: () => void;
  isPaid: boolean;
}

export const useProductStatusUpdate = ({
  day,
  product_id,
  onSuccess,
  isPaid
}: IUseProductStatusUpdate) => {
  const client = useQueryClient();
  const isDeadline = dayjs().isBefore(day.subtract(5, 'hour'));

  const { mutate, isPending } = useMutation({
    mutationFn: ({ key }: { key: IStatus }) =>
      productService.update(
        {
          user_id: userStore.data?.id,
          field: key,
          isDeadline: isDeadline && isPaid
        },
        product_id
      ),
    onSuccess: (data, value) => {
      client.setQueryData(
        [IKeys.PRODUCTS, { month: day.format('YYYY-MM') }],
        (items: IProduct[] | undefined) => {
          if (items) {
            const itemIndex = items.findIndex((el) => el.id === product_id);
            items[itemIndex][value.key] = data[value.key];
          }

          return items;
        }
      );

      if (value.key === IStatus.CANCEL) {
        if (isDeadline) {
          isPaid
            ? Toast.show({
                type: 'success',
                text1:
                  'You have successfully canceled your class and received a coupon!'
              })
            : Toast.show({
                type: 'info',
                text1: 'Class was canceled'
              });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Class was canceled, but no coupon, is too late'
          });
        }
      }

      if (value.key === IStatus.CONFIRM) {
        Toast.show({
          type: 'success',
          text1:
            'Thank you for your confirmation, I look forward to seeing you in class!'
        });
      }
      onSuccess && onSuccess();
    }
  });

  return { mutate, isPending };
};
