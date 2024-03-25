import { IconProps } from "./IconProps.types";

export default function PixelarticonsUpload({
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
        d="M11 5V3h2v2h2v2h2v2h-2V7h-2v10h-2V7H9v2H7V7h2V5zM3 15v6h18v-6h-2v4H5v-4z"
      ></path>
    </svg>
  );
}
