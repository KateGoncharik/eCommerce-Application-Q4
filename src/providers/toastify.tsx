import type { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

export const ToastifyProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="bottom-left"
        rtl={false}
        theme="light"
      />
    </>
  );
};
