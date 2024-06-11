import GlobalStyle from "../styles";
import StyledToastContainer from "@/components/Styles/StyledToastContainer";
import { useState } from "react";
import { nanoid } from "nanoid";
import Toast from "@/components/Toast";

export default function App({ Component, pageProps }) {
  const [toasts, setToasts] = useState([]);

  function handleAddToast(message, variant = "success") {
    const id = nanoid();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, visible: true, message, variant },
    ]);

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, visible: false } : toast
        )
      );
    }, 4500);

    setTimeout(() => {
      handleDeleteToast(id);
    }, 5000);
  }

  function handleDeleteToast(id) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  return (
    <>
      <GlobalStyle />
      <StyledToastContainer>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onToastClose={handleDeleteToast}
          />
        ))}
      </StyledToastContainer>
      <Component {...pageProps} onAddToast={handleAddToast} />
    </>
  );
}
