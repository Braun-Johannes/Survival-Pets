const toastColors = {
  success: "rgba(0,128,0,0.8)",
  warning: "rgba(255,165,0,0.8)",
  error: "rgba(255,0,0,0.8)",
};

export default function Toast({ toast, onToastClose }) {
  return (
    <li
      style={{
        position: "fixed",
        transition: "opacity 0.5s ease-in-out",
        opacity: toast.visible ? 1 : 0,
        listStyle: "none",
        marginBottom: "10px",
        background: toastColors[toast.variant],
        color: "white",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {toast.message} -{" "}
      <button onClick={() => onToastClose(toast.id)}>close</button>
    </li>
  );
}
