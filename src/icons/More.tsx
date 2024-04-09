import { IconProps } from "./IconProps.types";

export default function PixelarticonsMoreVertical({
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
        d="M15 1v6H9V1zm-2 2h-2v2h2zm2 6v6H9V9zm-2 2h-2v2h2zm2 6v6H9v-6zm-2 2h-2v2h2z"
      ></path>
    </svg>
  );
}
