import { AddClassModal, DayCard, MonthStepper } from '@/components';
import { useProducts } from '@/hooks';
import { IKeys } from '@/models';
import { userService } from '@/services';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';

export const Calendar = () => {
  const [modal, setModal] = useState(false);
  const [month, setMonth] = useState(dayjs());
  const { groupedProducts, message, products } = useProducts(month);
  const onSuccess = (isSuccess: boolean) => {
    setModal(false);
    if (isSuccess) {
      message.messageApi.success('Success!');
    }
  };
  const customersApi = useQuery({
    queryFn: () => userService.getCustomers({ per_page: 100 }),
    queryKey: [IKeys.CUSTOMERS]
  });

  return (
    <Spin spinning={products.isPending || customersApi.isPending}>
      <Space direction="vertical" size={12} style={{ width: '100%' }}>
        <Button block type="primary" onClick={() => setModal(true)}>
          Add class
        </Button>
        <MonthStepper month={month} setMonth={setMonth} />
        {customersApi.isSuccess &&
          Object.keys(groupedProducts).map((el) => {
            return <DayCard day={el} key={el} classes={groupedProducts[el]} />;
          })}
      </Space>
      <AddClassModal isOpen={modal} closeModal={onSuccess} />
      {message.contextHolder}
    </Spin>
  );
};
