"use client";
import { NotificationAttributes } from "@/types/notificationAttributes";
import { useState, useEffect } from "react";

export type NotificationProps = {
  notificationAttributes: NotificationAttributes;
  onClose: () => void;
};

const Notification: React.FC<NotificationProps> = ({
  notificationAttributes,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);
  const { message, error } = notificationAttributes;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-4 right-4 sm:right-1/2 sm:translate-x-1/2 ${
        !error ? "bg-blue-light" : "bg-red-light"
      } text-white px-8 py-3 rounded-lg shadow-lg transition-opacity duration-300 z-[9999]`}
    >
      {message}
    </div>
  );
};

export default Notification;
