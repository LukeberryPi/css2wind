import { IconProps } from "./IconProps.types";

export default function PixelarticonsScriptText({
  className,
  size = 24,
}: IconProps) {
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
        d="M6 3h14v2h2v6h-2v8h-2V5H6zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2zm0 0v2H4v-2zM8 7h8v2H8zm8 4H8v2h8z"
      ></path>
    </svg>
  );
}
