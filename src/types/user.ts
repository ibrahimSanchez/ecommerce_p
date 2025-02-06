export type User = {
  id?: string;

  email: string;
  name: string;
  password: string;

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
