import * as React from "react";
import { IconProps } from "./types";

export const ProSwitchLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.62 21c-.085 0-.141-.057-.127-.127V3.127c0-.056.042-.113.113-.113h2.785a4.61 4.61 0 0 1 4.61 4.61v8.766a4.61 4.61 0 0 1-4.61 4.61zm3.422-9.926c-1.004 0-1.824.82-1.824 1.824s.82 1.824 1.824 1.824 1.824-.82 1.824-1.824-.82-1.824-1.824-1.824M5.8 8.4a1.7 1.7 0 0 1 1.696-1.696A1.7 1.7 0 0 1 9.193 8.4c0 .934-.763 1.697-1.697 1.697A1.7 1.7 0 0 1 5.8 8.4M11.54 3c.085 0 .142.057.128.127V20.86c0 .07-.057.127-.128.127H7.61A4.61 4.61 0 0 1 3 16.376V7.61A4.61 4.61 0 0 1 7.611 3zm-1.315 16.544V4.442H7.611c-.849 0-1.64.34-2.235.933a3.1 3.1 0 0 0-.933 2.235v8.766c0 .849.34 1.64.933 2.234a3.1 3.1 0 0 0 2.235.934z"
        />
      </svg>
    );
  },
);

export default ProSwitchLine;
