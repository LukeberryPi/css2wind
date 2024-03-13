import type { IconProps } from "./IconProps.types";

export default function Copy({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M4 2h11v2H6v13H4zm4 4h12v16H8zm2 2v12h8V8z"
      ></path>
    </svg>
  );
}
