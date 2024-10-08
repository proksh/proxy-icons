import * as React from "react";
import { IconProps } from "./types";

export const ProGitRepositoryPrivateLine = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      ref={forwardedRef}
    >
      <path fill={color} d="M7 11v2h2v-2zm0 5v-2h2v2zm0 1v2h2v-2z" />
      <path
        fill={color}
        d="M12 1a6 6 0 0 0-6 6v1H3v14h18V8h-3V7a6 6 0 0 0-6-6m4 7H8V7a4 4 0 1 1 8 0zM6 20V10h13v10z"
      />
    </svg>
  );
});

export default ProGitRepositoryPrivateLine;
