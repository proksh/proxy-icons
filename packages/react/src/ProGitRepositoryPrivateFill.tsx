import * as React from "react";
import { IconProps } from "./types";

export const ProGitRepositoryPrivateFill = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path
        fill={color}
        d="M6 7a6 6 0 1 1 12 0v1h3v14H3V8h3zm10 0a4 4 0 0 0-8 0v1h8zm-9 4v2h2v-2zm0 3v2h2v-2zm0 5h2v-2H7z"
      />
    </svg>
  );
});

export default ProGitRepositoryPrivateFill;
