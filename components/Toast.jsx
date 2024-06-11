import PositionedButton from "./Styles/StyledButton";
import styled from "styled-components";

const toastColors = {
  success: "rgba(0,128,0,0.8)",
  warning: "rgba(255,165,0,0.8)",
  error: "rgba(255,0,0,0.8)",
};

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
      <PositionedButton
        $variant="cancel"
        position="relative"
        onClick={() => onToastClose(toast.id)}
      >
        Cancel
      </PositionedButton>
    </li>
  );
}
