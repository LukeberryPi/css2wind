import { IconProps } from "./IconProps.types";

export default function Minus({ size = 24, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="currentColor" d="M4 11h16v2H4z" />
    </svg>
  );
}
