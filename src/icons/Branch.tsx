import { IconProps } from "./IconProps.types";

export default function PixelarticonsGitBranch({
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
        d="M5 2h2v12h3v3h7v-7h-3V2h8v8h-3v9h-9v3H2v-8h3zm15 6V4h-4v4zM8 19v-3H4v4h4z"
      ></path>
    </svg>
  );
}
