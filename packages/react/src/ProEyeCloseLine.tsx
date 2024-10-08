import * as React from "react";
import { IconProps } from "./types";

export const ProEyeCloseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.625 12.35C9 13.642 10.385 14.5 12 14.5s3-.859 4.375-2.15c.658-.617 1.28-1.3 1.91-1.994l.073-.08c.642-.706 1.305-1.43 1.98-2.026l1.323 1.5c-.579.51-1.168 1.152-1.824 1.872l-.09.098-.291.321 2.251 2.252-1.414 1.414-2.217-2.217q-.164.161-.333.319a13 13 0 0 1-1.843 1.467l1.056 3.43-1.912.588-.964-3.133a6.57 6.57 0 0 1-4.16 0l-.964 3.133-1.912-.588 1.056-3.43a13 13 0 0 1-1.844-1.467 20 20 0 0 1-.332-.32l-2.217 2.218-1.414-1.414 2.251-2.252-.292-.32-.09-.099c-.655-.72-1.244-1.361-1.824-1.872l1.323-1.5c.676.596 1.339 1.32 1.98 2.026l.073.08c.631.693 1.253 1.377 1.911 1.995"
        />
      </svg>
    );
  },
);

export default ProEyeCloseLine;
