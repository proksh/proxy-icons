import * as React from "react";
import { IconProps } from "./types";

export const ProFolderCloseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v8l-.768-.768L19 14.464l-2.232-2.232-3.535 3.536L15.465 18l-2.233 2.232L14 21H2z"
        />
        <path
          fill={color}
          d="m17.586 18-2.293-2.293 1.414-1.414L19 16.586l2.293-2.293 1.414 1.414L20.414 18l2.293 2.293-1.414 1.414L19 19.414l-2.293 2.293-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProFolderCloseFill;
