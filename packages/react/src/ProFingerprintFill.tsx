import * as React from "react";
import { IconProps } from "./types";

export const ProFingerprintFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 11c0-2.194.764-4.21 2.04-5.796l1.782 1.782A6.72 6.72 0 0 0 5.25 11v2.578c0 .436.002.908-.214 1.449-.175.437-.494.914-.912 1.54l-.084.126-2.08-1.386c.54-.812.69-1.05.754-1.209l.004-.008c.019-.046.032-.078.032-.59zm5.237-5.428L6.205 3.79A9.2 9.2 0 0 1 12 1.75 9.25 9.25 0 0 1 21.25 11v2.5c0 2.673-.536 4.81-1.064 6.395l-2.372-.79c.472-1.415.936-3.278.936-5.605V11A6.75 6.75 0 0 0 7.987 5.572"
        />
        <path
          fill={color}
          d="M12 5.75A5.25 5.25 0 0 0 6.75 11v1c0 1.974-.128 3.18-.436 4.105-.293.879-.78 1.593-1.698 2.511l1.768 1.768c1.082-1.082 1.845-2.118 2.302-3.489.442-1.325.564-2.869.564-4.895v-1a2.75 2.75 0 1 1 5.5 0h2.5c0-2.9-2.35-5.25-5.25-5.25"
        />
        <path
          fill={color}
          d="M17.246 13h-2.5c-.029 2.325-.245 5.203-1.864 8.441l2.236 1.118c1.873-3.746 2.1-7.091 2.128-9.559m-6.496 2.5V10h2.5v5.5c0 3.016-1.806 5.324-3.366 6.884l-1.768-1.768c1.44-1.44 2.634-3.132 2.634-5.116"
        />
      </svg>
    );
  },
);

export default ProFingerprintFill;
