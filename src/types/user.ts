export type User = {
  id?: string;

  email: string;
  name: string;
  password: string;
  phone: string;
  address: string;

  active?: boolean;
  activation_token?: string;
  reset_password_token?: string;

  createdAt?: string;
  updatedAt?: string;
};

export type ChangePassword = {
  newPassword: string;
  oldPassword: string;
  confirmNewPassword?: string;
};

export type CreateUser = {
  email: string;
  name: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
};

export type UpdateUser = {
  email?: string;
  name?: string;
};
