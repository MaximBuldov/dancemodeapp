import { IRUser, IUser, IUserResponse, IUserRoles } from '@/models';
import { secureStore } from '@/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class User {
  data: IRUser | null = null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'user',
      properties: ['data'],
      storage: AsyncStorage
    });
  }

  setUser(data: IUserResponse) {
    this.data = data.user;
    secureStore.setItem('token', data.token);
  }

  updateUser(data: IUser) {
    this.data = { id: this.data!.id, role: this.data!.role, ...data };
  }

  logout() {
    AsyncStorage.clear();
    this.data = null;
  }

  checkUserId(arr: number[]) {
    return arr.includes(Number(this.data?.id));
  }

  get isAdmin() {
    return this.data?.role.includes(IUserRoles.ADMIN);
  }

  get isAuth() {
    return !!this.data;
  }

  get initials() {
    return `${this.data?.first_name[0]}${this.data?.last_name[0]}`;
  }
}

export const userStore = new User();
