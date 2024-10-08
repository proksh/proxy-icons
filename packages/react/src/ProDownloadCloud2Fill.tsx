import * as React from "react";
import { IconProps } from "./types";

export const ProDownloadCloud2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 3a7 7 0 0 1 6.327 4.002L17.5 7a6.5 6.5 0 0 1 6.495 6.755Q24 13.877 24 14a6 6 0 0 1-6 6h-.672l.793-.793V16.38l-1.414-1.415H15v-1.878l-2-2h-2l-2 2v1.878H7.293L5.879 16.38v2.828l.793.793H5.5A5.5 5.5 0 0 1 4.046 9.195 7 7 0 0 1 11 3"
        />
        <path
          fill={color}
          d="m7.293 17.793 1.414-1.414L11 18.672v-5.586h2v5.586l2.293-2.293 1.414 1.414L12 22.5z"
        />
      </svg>
    );
  },
);

export default ProDownloadCloud2Fill;
