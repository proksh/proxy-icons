import * as React from "react";
import { IconProps } from "./types";

export const ProFilePdf2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12.48 7.304-1.975.096-.147 1.47a11 11 0 0 1-2.356 5.776l-1.783 2.23 1.295 1.482 1.912-1.148A12 12 0 0 1 15.6 15.5H17l.406-1.914-1.19-.528A6 6 0 0 1 12.77 8.75zm-1.901 7.128c.512-.86.922-1.774 1.224-2.725a8 8 0 0 0 1.661 1.957c-.986.152-1.954.41-2.885.768"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M15.914 2H3v20h18V7.086zM15 8V4H5v16h14V8z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFilePdf2Line;
