import * as React from "react";
import { IconProps } from "./types";

export const ProContrastDrop2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 18a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5" />
        <path
          fill={color}
          d="M12 .164a55 55 0 0 0-1.949 1.796 49 49 0 0 0-2.809 2.98C6.222 6.127 5.18 7.478 4.386 8.836 3.608 10.17 3 11.627 3 13a9 9 0 1 0 18 0c0-1.373-.608-2.831-1.386-4.165-.793-1.358-1.835-2.709-2.856-3.894a49 49 0 0 0-2.81-2.98A55 55 0 0 0 12 .163m-.551 3.227q.309-.301.551-.53.242.229.551.53c.736.72 1.715 1.721 2.691 2.855.98 1.137 1.937 2.385 2.644 3.597C18.608 11.08 19 12.163 19 13a7 7 0 1 1-14 0c0-.836.392-1.92 1.114-3.157.707-1.212 1.665-2.46 2.644-3.597a47 47 0 0 1 2.69-2.855"
        />
      </svg>
    );
  },
);

export default ProContrastDrop2Line;
