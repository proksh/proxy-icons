import * as React from "react";
import { IconProps } from "./types";

export const ProContactsBookUploadFill = React.forwardRef<
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
      <path fill={color} d="M7 2H3v20h4z" />
      <path
        fill={color}
        d="M9 2v20h11l1-1V3l-1-1zm9.013 9.992-4.012-4-3.991 4h2.751V16h2.5v-4.008z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path fill={color} d="M22 16v-4h2v4zm0-6V6h2v4z" />
    </svg>
  );
});

export default ProContactsBookUploadFill;
