import icons from "@/lib/icons";
import styled from "styled-components";

export default function SVGIcon({
  variant,
  color = "black",
  size = 50,
  ariaLabel,
  text,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icons[variant].viewBox}
      fill={color}
      width={size}
      aria-label={ariaLabel}
    >
      <title>{icons[variant].title}</title>
      <path d={icons[variant].path} />

      {variant === "tombstone" && (
        <>
          <StyledText x="50%" y="10%" textAnchor="middle" fontSize="12">
            R.I.P
          </StyledText>
          <text x="50%" y="15%" textAnchor="middle" fontSize="12">
            {text}
          </text>
          <text x="50%" y="20%" textAnchor="middle" fontSize="10">
            Click here
          </text>
        </>
      )}
    </svg>
  );
}

const StyledText = styled.text`
  font-size: 20px;
`;
