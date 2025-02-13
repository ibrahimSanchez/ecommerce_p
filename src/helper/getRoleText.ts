export const getRoleText = (role: string) => {
  switch (role) {
    case "admin_role":
      return "Admin";
    case "user_role":
      return "Common User";
    default:
      return "Other";
  }
};
