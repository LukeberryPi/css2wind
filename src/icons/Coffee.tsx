import { IconProps } from "./IconProps.types";

export default function Coffee({ className, size = 24 }: IconProps) {
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
        d="M7 3H5v4h2zm4 0H9v4h2zm2 0h2v4h-2zm8 6H3v12h14v-5h4zm-2 5h-2v-3h2zM5 11h10v8H5z"
      ></path>
    </svg>
  );
}
