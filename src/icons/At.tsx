import { IconProps } from "./IconProps.types";

export default function PixelarticonsAt({ className, size = 24 }: IconProps) {
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
        d="M4 4h16v12H8V8h8v6h2V6H6v12h14v2H4zm10 10v-4h-4v4z"
      ></path>
    </svg>
  );
}
