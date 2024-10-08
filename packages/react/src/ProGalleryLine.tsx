import * as React from "react";
import { IconProps } from "./types";

export const ProGalleryLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
        <path
          fill={color}
          d="M18 3h4v18H2V3h4V1h2v2h8V1h2zm2 16v-5.938A8.004 8.004 0 0 0 11.252 19zm0-14H4v5.05c3.382.224 6.448 1.203 8.755 2.706q.152.1.3.202A9.96 9.96 0 0 1 19 11q.505 0 1 .05zM9.2 19a9.97 9.97 0 0 1 2.333-4.652C9.594 13.122 6.97 12.271 4 12.054V19z"
        />
      </svg>
    );
  },
);

export default ProGalleryLine;
