import { IconProps } from "./IconProps.types";

export function Trend({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M14 6h8v8h-2v-4h-2V8h-4V6zm2 6v-2h2v2h-2zm-2 2v-2h2v2h-2zm-2 0h2v2h-2v-2zm-2-2h2v2h-2v-2zm-2 0v-2h2v2H8zm-2 2v-2h2v2H6zm-2 2v-2h2v2H4zm0 0v2H2v-2h2z" />
    </svg>
  );
}
