import * as React from "react";
import { IconProps } from "./types";

export const ProUserLocationLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 16c-1.17 0-2 .87-2 1.8 0 .105.068.366.325.792.239.396.572.823.927 1.23.26.296.521.57.748.797.227-.228.488-.501.748-.798a9 9 0 0 0 .927-1.229c.257-.426.325-.687.325-.792 0-.93-.83-1.8-2-1.8m0 6-.663.749-.003-.003-.009-.008-.028-.026a18 18 0 0 1-.462-.433c-.294-.285-.69-.686-1.087-1.14a11 11 0 0 1-1.135-1.514C14.307 19.12 14 18.468 14 17.8c0-2.163 1.857-3.8 4-3.8s4 1.637 4 3.8c0 .668-.307 1.319-.613 1.825a11 11 0 0 1-1.135 1.514 20 20 0 0 1-1.549 1.573l-.028.026-.009.008-.003.003zm0 0 .663.749-.663.586-.663-.586zM12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m7.165 7H8a5 5 0 0 0-5 5v3h2v-3a3 3 0 0 1 3-3h4.82a5.2 5.2 0 0 1 1.345-2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUserLocationLine;
