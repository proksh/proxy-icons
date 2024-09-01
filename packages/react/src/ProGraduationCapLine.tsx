import * as React from "react";
import { IconProps } from "./types";

export const ProGraduationCapLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1.834 23.944 9H24v8.5h-2v-7.334l-2 1.2v7.195l-.3.294A10.97 10.97 0 0 1 12 22c-2.998 0-5.717-1.2-7.7-3.145l-.3-.294v-7.195L.057 9zm0 14.332-6-3.6v5.142A8.96 8.96 0 0 0 12 20a8.96 8.96 0 0 0 6-2.292v-5.142zM3.944 9 12 13.834 20.057 9 12 4.166z"
        />
      </svg>
    );
  },
);

export default ProGraduationCapLine;
