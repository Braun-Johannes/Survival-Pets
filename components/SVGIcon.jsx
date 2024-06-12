import icons from "@/lib/icons";

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
    </svg>
  );
}
