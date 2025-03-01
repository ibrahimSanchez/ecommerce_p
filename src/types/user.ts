export type User = {
  id?: string;

  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  address: string;
  role?: string;
  active?: boolean;
  activation_token?: string;
  reset_password_token?: string;
  avatarUrl?: string;

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
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  password: string;
  confirmPassword: string;
};

export type UpdateUser = {
  email?: string;
  name?: string;
};

export type Role = {
  id: string;
  role: string;
};
