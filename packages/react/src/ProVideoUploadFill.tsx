import * as React from "react";
import { IconProps } from "./types";

export const ProVideoUploadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 4h16v5.131l6-4V18.87l-6-4V20H1zm3.646 7.647L5 12.5h3V16h2v-3.5h3l.354-.854-4-4h-.708z"
        />
      </svg>
    );
  },
);

export default ProVideoUploadFill;
