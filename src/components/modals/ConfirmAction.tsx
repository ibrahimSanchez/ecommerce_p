import React from "react";

interface ConfirmActionProps {
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmAction: React.FC<ConfirmActionProps> = ({
  message = "Are you sure you want to perform this action?",
  confirmText = "Accept",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) => {
  return (
    <div
      className={`backdrop-filter-sm visible fixed left-0 top-0 z-[99999] flex min-h-screen w-full justify-center items-center bg-[#000]/40 px-4 py-8 sm:px-8`}
    >
      <div className="shadow-7 relative w-full max-w-[600px] py-10 scale-100 transform rounded-[15px] bg-white transition-all flex flex-col justify-center items-center">
        <button
          onClick={onCancel}
          className="text-body absolute -right-6 -top-6 z-[9999] flex h-11.5 w-11.5 items-center justify-center rounded-full border-2 border-stroke bg-white hover:text-dark"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9983 10.586L17.9483 5.63603L19.3623 7.05003L14.4123 12L19.3623 16.95L17.9483 18.364L12.9983 13.414L8.04828 18.364L6.63428 16.95L11.5843 12L6.63428 7.05003L8.04828 5.63603L12.9983 10.586Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>

        <>
          <div className="w-full px-10">
            <p className="pb-2 font-medium text-xl text-dark">{message}</p>
            <div className="flex justify-between">
              <button
                onClick={onConfirm}
                className="bg-blue-light mt-5 mx-5 w-full rounded-[10px] border border-blue-500 bg-blue-500 text-white py-3.5 px-5 text-custom-sm hover:bg-blue-600 transition"
              >
                {confirmText}
              </button>
              <button
                onClick={onCancel}
                className="bg-red-light mt-5 mx-5 w-full rounded-[10px] border border-red-500 bg-red-500 text-white py-3.5 px-2 text-custom-sm hover:bg-red-600 transition"
              >
                {cancelText}
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};
