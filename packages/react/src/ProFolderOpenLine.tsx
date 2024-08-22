import * as React from "react";
import { IconProps } from "./types";

export const ProFolderOpenLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.414 3H2v18h17.765l2.71-10H5.47L4 16.875V5h5.586l2 2H19v2h2V5h-8.586zM5.53 19h12.705l1.626-6H7.03z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFolderOpenLine;
