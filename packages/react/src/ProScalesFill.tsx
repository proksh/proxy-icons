import * as React from "react";
import { IconProps } from "./types";

export const ProScalesFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M17 21v-2h-4V5h7V3h-7V2h-2v1H4v2h7v14H7v2z" />
        <path
          fill={color}
          d="M17.874 7.639c-.298.26-.697.626-1.1 1.052a9.5 9.5 0 0 0-1.155 1.457C15.302 10.66 15 11.31 15 12a4 4 0 0 0 8 0c0-.691-.302-1.34-.62-1.852-.33-.531-.754-1.034-1.153-1.457a16 16 0 0 0-1.1-1.052c-.314-.274-.642-.53-.97-.786L19 6.73l-.156.122a22 22 0 0 0-.97.786M19 9.313c.232.21.504.468.773.753.351.37.677.764.909 1.138.245.394.318.659.318.796h-4c0-.137.073-.402.318-.796.232-.374.558-.768.909-1.138.27-.285.54-.543.773-.753M2.774 8.692c.403-.427.802-.794 1.1-1.053.313-.274.642-.53.97-.786L5 6.73l.156.122c.328.256.657.512.97.786.298.26.697.626 1.1 1.052.4.423.824.926 1.155 1.457C8.698 10.66 9 11.31 9 12a4 4 0 0 1-8 0c0-.691.302-1.34.62-1.852a9.5 9.5 0 0 1 1.154-1.457m1.452 1.374c-.35.37-.676.764-.908 1.138-.245.394-.318.659-.318.796h4c0-.137-.073-.402-.318-.796a7.5 7.5 0 0 0-.908-1.138A14 14 0 0 0 5 9.312c-.232.21-.504.468-.774.753"
        />
      </svg>
    );
  },
);

export default ProScalesFill;