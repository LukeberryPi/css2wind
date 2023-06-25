import { IconProps } from "./IconProps.types";

export function PlayIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M10 8.64L15.27 12L10 15.36V8.64M8 5v14l11-7L8 5z" />
    </svg>
  );
}
