import PositionedButton from "./Styles/StyledButton";
import styled from "styled-components";

export default function Toast({ toast, onToastClose }) {
  return (
    <StyledToastMessage $visible={toast.visible} $variant={toast.variant}>
      {toast.message} -{" "}
      <PositionedButton
        $variant="cancel"
        $position="relative"
        onClick={() => onToastClose(toast.id)}
      >
        X
      </PositionedButton>
    </StyledToastMessage>
  );
}

const toastColors = {
  success: "rgba(0,128,0,0.8)",
  warning: "rgba(255,165,0,0.8)",
  error: "rgba(255,0,0,0.8)",
};

const StyledToastMessage = styled.li`
  transition: opacity 0.5s ease-in-out;
  list-style: none;
  color: white;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  background: ${({ $variant }) => toastColors[$variant]};
`;
