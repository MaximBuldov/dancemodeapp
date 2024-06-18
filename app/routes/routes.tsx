import { IRoute } from '@/models';
import { ForgotPassword, Login, Signup } from '@/screens';

// export const adminRoutes: IRoute[] = [
// 	{
// 		name: ORDERS,
// 		component: Orders
// 	},
// 	{
// 		name: PROFILE,
// 		component: Profile
// 	},
// 	{
// 		name: STUDENTS,
// 		component: Students
// 	},
// 	{
// 		name: CALENDAR,
// 		component: Calendar
// 	},
// 	{
// 		name: CREATE_COUPON,
// 		component: CreateCoupon
// 	},
// 	{
// 		name: REPORTS,
// 		component: Reports
// 	}
// ];

// export const userRoutes: IRoute[] = [
// 	{
// 		name: PROFILE,
// 		component: Profile
// 	},
// 	{
// 		name: CLASSES,
// 		component: Classes
// 	},
// 	{
// 		name: VIDEO,
// 		component: Video
// 	},
// 	{
// 		name: PAYMENTS,
// 		component: Payments
// 	},
// 	{
// 		name: CART,
// 		component: Cart
// 	},
// 	{
// 		name: COUPONS,
// 		component: Coupons
// 	},
// 	{
// 		name: CHECKOUT,
// 		component: Checkout
// 	}
// ];

export const publicRoutes: IRoute[] = [
  {
    name: 'Login',
    component: Login
  },
  {
    name: 'Signup',
    component: Signup
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword
  }
];
