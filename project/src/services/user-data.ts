import { UserData } from '../types/user-data';

const USER_DATA_KEY_NAME = 'six-cities-user-data';

export const getUserData = (): UserData => {
  const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY_NAME) as string);
  return userData ?? '';
};

export const saveUserData = (userData: UserData): void => {
  localStorage.setItem(USER_DATA_KEY_NAME, JSON.stringify(userData));
};

export const dropUserData = (): void => {
  localStorage.removeItem(USER_DATA_KEY_NAME);
};
