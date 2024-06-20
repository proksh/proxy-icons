import * as React from "react";
import { IconProps } from "./types";

export const ProGitRepositoryCommitsLine = React.forwardRef<
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
        d="M3 5a3 3 0 0 1 3-3h15v19h-5v-2h3v-3h-1v-2h1V4H6v10.035Q6.245 14 6.5 14H8v2H6.5a1.5 1.5 0 0 0 0 3H10v2H6a3 3 0 0 1-3-3z"
      />
      <path
        fill={color}
        d="M3 5a3 3 0 0 1 3-3h15v19h-5v-2h3v-3h-1v-2h1V4H6v10.035Q6.245 14 6.5 14H8v2H6.5a1.5 1.5 0 0 0 0 3H10v2H6a3 3 0 0 1-3-3z"
      />
      <path
        fill={color}
        d="M3 5a3 3 0 0 1 3-3h15v19h-5v-2h3v-3h-1v-2h1V4H6v10.035Q6.245 14 6.5 14H8v2H6.5a1.5 1.5 0 0 0 0 3H10v2H6a3 3 0 0 1-3-3z"
      />
      <path fill={color} d="M7 5v2h2V5z" />
      <path fill={color} d="M7 5v2h2V5z" />
      <path fill={color} d="M7 5v2h2V5zm0 5V8h2v2z" />
      <path fill={color} d="M7 10V8h2v2z" />
      <path
        fill={color}
        d="M7 10V8h2v2zm7 6.203V23h-2v-6.796l-1.24 1.447-1.519-1.302 3.76-4.386 3.759 4.386-1.519 1.302z"
      />
      <path
        fill={color}
        d="M14 16.203V23h-2v-6.796l-1.24 1.447-1.519-1.302 3.76-4.386 3.759 4.386-1.519 1.302z"
      />
      <path
        fill={color}
        d="M14 16.203V23h-2v-6.796l-1.24 1.447-1.519-1.302 3.76-4.386 3.759 4.386-1.519 1.302z"
      />
    </svg>
  );
});

export default ProGitRepositoryCommitsLine;
