import * as React from "react";
import { IconProps } from "./types";

export const ProBrushLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m13.392 6.24-.017-.02 5-4 1.332.073 3 3 .067 1.34-4.029 4.924A7.5 7.5 0 0 1 11.5 21q-.133 0-.265-.009A3 3 0 0 1 11 21c-1.144 0-3.095-.41-4.808-.843-1.73-.438-3.424-.954-4.086-1.238l-1.358-.582 1.055-1.055C2.866 16.22 4 15.087 4 13.5a7.5 7.5 0 0 1 9.392-7.26m2.056.882A7.54 7.54 0 0 1 17.845 9.5l2.808-3.432-1.727-1.727zM6 13.5c0 1.734-.854 3.08-1.696 4.059a54 54 0 0 0 2.378.659C8.428 18.66 10.143 19 11 19a1 1 0 0 0 .11-.006l.104-.012.103.01q.09.008.183.008A5.5 5.5 0 1 0 6 13.5"
        />
      </svg>
    );
  },
);

export default ProBrushLine;
