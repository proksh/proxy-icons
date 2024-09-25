import * as React from "react";
import { IconProps } from "./types";

export const ProCheckDoubleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 18.164 1.918-1.918-1.414-1.414-.504.504-4.293-4.293-1.414 1.414zM17.457 7.707l-5.71 5.71-1.415-1.413 5.71-5.711z"
        />
        <path
          fill={color}
          d="M12.5 18.414 22.957 7.957l-1.414-1.414-9.043 9.043-4.293-4.293-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProCheckDoubleLine;
