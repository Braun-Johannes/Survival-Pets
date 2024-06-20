import PositionedButton from "@/components/Styles/StyledButton";
import styled from "styled-components";

export default function Toast({ snackbar, onSnackbarClose }) {
  return (
    <StyledToastMessage $visible={snackbar.visible} $variant={snackbar.variant}>
      {snackbar.message} -{" "}
      <PositionedButton
        $variant="cancel"
        $position="relative"
        onClick={() => onSnackbarClose(snackbar.id)}
      >
        X
      </PositionedButton>
    </StyledToastMessage>
  );
}

const toastColors = {
  success: "rgba(0,128,0,0.8)",
  edit: "rgba(104, 32, 69,0.8)",
  feed: "rgba(144,238,144, 0.8)",
  sleep: "rgba(173,216,230, 0.8)",
  play: "rgba(255,165,0, 0.8)",
  health: "rgba(255,127,127, 0.8)",
};

const StyledToastMessage = styled.li`
  transition: opacity 0.5s ease-in-out;
  list-style: none;
  color: black;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  background: ${({ $variant }) => toastColors[$variant]};
`;
