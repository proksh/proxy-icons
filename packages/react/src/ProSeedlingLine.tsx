import * as React from "react";
import { IconProps } from "./types";

export const ProSeedlingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v1c0 3.18.489 5.584 2.213 7.107C5.731 12.447 8 12.91 11 12.987V21h2v-5.01c2.985-.068 5.228-.47 6.736-1.636C21.5 12.992 22 10.818 22 8V7h-1c-4.018 0-6.62.61-8.174 2.074-.211-1.407-.662-2.672-1.59-3.68C9.684 3.709 7.053 3 3 3zm8.983 7.986c-2.86-.082-4.486-.531-5.446-1.378-.907-.802-1.412-2.143-1.517-4.59 3.257.115 4.882.794 5.744 1.73.828.9 1.147 2.23 1.22 4.238m2.04 3.002c.08-1.654.396-2.72 1.166-3.45.862-.82 2.507-1.42 5.784-1.523-.117 2.015-.606 3.096-1.46 3.756-.968.748-2.619 1.144-5.49 1.217"
        />
      </svg>
    );
  },
);

export default ProSeedlingLine;
