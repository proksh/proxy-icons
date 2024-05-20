import * as React from "react";
import { IconProps } from "./types";

export const ProCriminalLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 11c1.105 0 2-.672 2-1.5S10.105 8 9 8s-2 .672-2 1.5.895 1.5 2 1.5m5.5 3.5c0 .828-1.12 1.5-2.5 1.5s-2.5-.672-2.5-1.5S10.62 13 12 13s2.5.672 2.5 1.5M15 11c1.105 0 2-.672 2-1.5S16.105 8 15 8s-2 .672-2 1.5.895 1.5 2 1.5"
        />
        <path
          fill={color}
          d="M12 2a9 9 0 0 0-7.069 14.571 11 11 0 0 0-2.007 2.213l-.857 1.25L12 22.02l9.933-1.987-.857-1.25a11 11 0 0 0-2.008-2.212A9 9 0 0 0 12 2m-7 9a7 7 0 1 1 11.9 5l-.874.856 1.013.686q.751.509 1.384 1.154L12 19.98l-6.423-1.284a9 9 0 0 1 1.384-1.154l1.013-.686-.874-.857A6.98 6.98 0 0 1 5 11"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProCriminalLine;
