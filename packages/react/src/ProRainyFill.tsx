import * as React from "react";
import { IconProps } from "./types";

export const ProRainyFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M11 2a7 7 0 0 1 6.327 4.002L17.5 6a6.5 6.5 0 0 1 6.495 6.755Q24 12.877 24 13a6 6 0 0 1-6 6h-1.539c-.103-.675-.395-1.253-.634-1.654a9.7 9.7 0 0 0-1.083-1.443c-.363-.409-.72-.76-.984-1.008-.42-.395-.864-.766-1.307-1.136l-.453-.38-.453.38a30 30 0 0 0-1.307 1.136c-.263.248-.62.6-.984 1.008-.357.4-.76.9-1.083 1.443-.239.4-.53.98-.634 1.654H5.5A5.5 5.5 0 0 1 4.046 8.195 7 7 0 0 1 11 2"
        />
        <path
          fill={color}
          d="M12 16s1.96 1.661 2.409 3q.089.262.091.5a2.5 2.5 0 0 1-5 0q.002-.238.091-.5c.45-1.339 2.409-3 2.409-3"
        />
      </svg>
    );
  },
);

export default ProRainyFill;
