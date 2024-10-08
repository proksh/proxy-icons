import * as React from "react";
import { IconProps } from "./types";

export const ProCameraLensLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M6.396 6.29A7.97 7.97 0 0 1 12.036 4l-3.48 6.03zM5.072 7.998l3.477 6.022H4.257A8 8 0 0 1 4 12a7.96 7.96 0 0 1 1.072-4.003m.01 8.022h6.93l-2.11 3.703a8.02 8.02 0 0 1-4.82-3.703M12.044 20l2.553-4.48.86-1.489 2.132 3.693A7.97 7.97 0 0 1 12.045 20m6.872-3.977-3.453-5.98h4.294c.158.626.242 1.282.242 1.958a7.96 7.96 0 0 1-1.083 4.022m.036-7.98h-6.94l2.16-3.743a8.02 8.02 0 0 1 4.78 3.742m-5.798 5.977h-2.297L9.71 12.03l1.148-1.989h2.297l1.148 1.99z"
        />
      </svg>
    );
  },
);

export default ProCameraLensLine;
