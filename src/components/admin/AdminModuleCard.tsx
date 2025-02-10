import React from "react";

interface AdminModuleCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  onClick: () => void;
}

const AdminModuleCard: React.FC<AdminModuleCardProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 bg-white hover:text-blue shadow-lg rounded-lg hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="text-3xl text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default AdminModuleCard;
