import { IconProps } from "./IconProps.types";

export default function PixelarticonsUndo({ className, size = 24 }: IconProps) {
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
        d="M8 4h2v2H8zm10 6V8H8V6H6v2H4v2h2v2h2v2h2v-2H8v-2zm0 8v-8h2v8zm0 0v2h-6v-2z"
      ></path>
    </svg>
  );
}
