import * as React from "react";
import { IconProps } from "./types";

export const ProContactsBookUploadLine = React.forwardRef<
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
        d="M18.013 11.992h-2.752V16h-2.5v-4.008H10.01l3.991-4z"
      />
      <path
        fill={color}
        d="M3 2h17l1 1v18l-1 1H3zm2 2v16h2V4zm4 0v16h10V4z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path fill={color} d="M22 16v-4h2v4zm0-10v4h2V6z" />
    </svg>
  );
});

export default ProContactsBookUploadLine;
