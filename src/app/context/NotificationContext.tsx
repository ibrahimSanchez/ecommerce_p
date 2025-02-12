"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { NotificationAttributes } from "@/types/notificationAttributes";
import Notification from "@/components/Notification/Notification";

type NotificationContextType = {
  showNotification: (attributes: NotificationAttributes) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notification, setNotification] = useState<
    NotificationAttributes | null
  >(null);

  const showNotification = (attributes: NotificationAttributes) => {
    setNotification(attributes);
    setTimeout(() => setNotification(null), 2500);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Notification
          notificationAttributes={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
