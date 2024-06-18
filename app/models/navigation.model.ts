import { ComponentType } from 'react';

export type TypeRootStackParamList = {
  Profile: undefined;
  Classes: undefined;
  Payments: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  Cart: undefined;
  Coupons: undefined;
  Students: undefined;
  Orders: undefined;
  Calendar: undefined;
  Checkout: undefined;
  Coupon: undefined;
  Reports: undefined;
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}
