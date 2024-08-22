import * as React from "react";
import { IconProps } from "./types";

export const ProFilePdf2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.579 14.432c.512-.86.922-1.774 1.224-2.725a8 8 0 0 0 1.661 1.957c-.986.152-1.954.41-2.885.768"
        />
        <path
          fill={color}
          d="M3 2h12.914L21 7.086V22H3zm9.48 5.304-1.975.096-.147 1.47a11 11 0 0 1-2.356 5.776l-1.783 2.23 1.295 1.482 1.912-1.148A12 12 0 0 1 15.6 15.5H17l.406-1.914-1.19-.528A6 6 0 0 1 12.77 8.75z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFilePdf2Fill;
