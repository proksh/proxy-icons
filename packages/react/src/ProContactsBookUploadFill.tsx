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
      viewBox="0 0 24 24"
      {...props}
      ref={forwardedRef}
    >
      <path
        fill={color}
        d="M7 2H3v20h4zm2 0h11l1 1v18l-1 1H9zm9.013 9.992-4.012-4-3.991 4h2.751V16h2.5v-4.008zM22 16v-4h2v4zm0-6V6h2v4z"
      />
    </svg>
  );
});

export default ProContactsBookUploadFill;
