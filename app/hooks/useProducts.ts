import { IKeys } from '@/models';
import { productService } from '@/services';
import { userStore } from '@/stores';
import { groupByDate } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useMemo } from 'react';

export const useProducts = (day: dayjs.Dayjs) => {
  const month = day.format('YYYY-MM');

  const products = useQuery({
    queryKey: [IKeys.PRODUCTS, { month }],
    queryFn: () => productService.getAll({ month, per_page: 20 }),
    enabled: userStore.isAuth
  });

  const groupedProducts = useMemo(() => groupByDate(products.data), [products]);

  return { products, groupedProducts };
};
