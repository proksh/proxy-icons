import * as React from "react";
import { IconProps } from "./types";

export const ProFacebookBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 19h5V5H5v14h7v-5h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.73 2.73 0 0 1 13.536 6.9c.382-.205.857-.328 1.687-.381q.494-.032 1.278.08v1.9H16c-.917 0-1.296.043-1.522.164a.73.73 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
        />
      </svg>
    );
  },
);

export default ProFacebookBoxLine;
