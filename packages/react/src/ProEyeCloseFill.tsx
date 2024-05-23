import * as React from "react";
import { IconProps } from "./types";

export const ProEyeCloseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.521 8.122a33 33 0 0 1-3.938 1.818C14.969 10.553 13.315 11 12 11s-2.97-.447-4.582-1.06a33 33 0 0 1-3.94-1.818L2.339 9.75c.58.51 1.17 1.152 1.825 1.872l.09.098.291.321-2.251 2.252 1.414 1.414 2.218-2.217q.164.161.332.319c.56.526 1.172 1.036 1.843 1.467l-1.056 3.43 1.912.588.964-3.133a6.57 6.57 0 0 0 4.16 0l.964 3.133 1.912-.588-1.056-3.43a13 13 0 0 0 1.844-1.467q.167-.158.332-.32l2.217 2.218 1.414-1.414-2.251-2.252.291-.32h.001l.09-.099c.655-.72 1.244-1.361 1.823-1.872z"
        />
      </svg>
    );
  },
);

export default ProEyeCloseFill;
