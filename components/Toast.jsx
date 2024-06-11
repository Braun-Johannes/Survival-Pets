const toastColors = { success: "green", warning: "orange", error: "red" };

export default function Toast({ toast, onToastClose }) {
  return (
    <li
      style={{
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
