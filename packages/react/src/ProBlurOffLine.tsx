import * as React from "react";
import { IconProps } from "./types";

export const ProBlurOffLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M12 2.86q-.242.23-.55.53a49 49 0 0 0-1.68 1.724L8.355 3.698a51 51 0 0 1 1.696-1.738 55 55 0 0 1 1.95-1.796 55 55 0 0 1 1.948 1.796 49 49 0 0 1 2.809 2.98c1.02 1.186 2.063 2.537 2.856 3.895C20.392 10.17 21 11.627 21 13a9 9 0 0 1-.469 2.875l-1.64-1.64q.109-.603.11-1.235c0-.836-.393-1.92-1.114-3.157-.708-1.212-1.665-2.46-2.645-3.597A47 47 0 0 0 12 2.86M5.77 6.77 2 3l1.414-1.414 19 19L21 22l-2.636-2.636A9 9 0 0 1 3 13c0-1.373.608-2.831 1.386-4.165A22 22 0 0 1 5.77 6.77m11.18 11.18L7.2 8.2a20 20 0 0 0-1.086 1.643C5.392 11.08 5 12.163 5 13a7 7 0 0 0 11.95 4.95"
        />
      </svg>
    );
  },
);

export default ProBlurOffLine;
